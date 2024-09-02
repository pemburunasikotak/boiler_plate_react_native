import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const attendanceData = [
    { id: '1', date: '10 Okt 2023', status: 'Hadir' },
    { id: '2', date: '9 Okt 2023', status: 'Hadir' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Attendance</Text>
      <Icon name="settings-outline" size={24} color="#333" style={styles.settingsIcon} />

      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} // Example image URL
        style={styles.profileImage}
      />

      {/* User Information */}
      <Text style={styles.name}>Ayu Lestari</Text>
      <Text style={styles.role}>Employee</Text>

      {/* Date and Time */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Tanggal</Text>
          <Text style={styles.infoText}>12 Okt 2023</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Waktu</Text>
          <Text style={styles.infoText}>08:00 AM</Text>
        </View>
      </View>

      {/* Check-in Button */}
      <TouchableOpacity style={styles.checkInButton}>
        <Text style={styles.checkInButtonText}>Check-in</Text>
      </TouchableOpacity>

      {/* Attendance History */}
      <Text style={styles.historyHeader}>Attendance History</Text>
      <FlatList
        data={attendanceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <View style={styles.historyItemLeft}>
              <Icon name="calendar-outline" size={24} color="#333" style={styles.historyIcon} />
              <Text style={styles.historyText}>{item.date}</Text>
            </View>
            <Text style={styles.historyStatus}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  role: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    width: '48%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  checkInButton: {
    backgroundColor: '#00bfff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  checkInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  historyItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    marginRight: 12,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  historyStatus: {
    fontSize: 16,
    color: '#00bfff',
  },
});

export default ProfileScreen;
