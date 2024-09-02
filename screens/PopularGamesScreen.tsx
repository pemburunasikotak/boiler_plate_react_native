

// export default PopularGamesScreen;

import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = ['Aksi', 'Drama', 'Komedi', 'Romantis', 'Horor'];

// Data dummy untuk setiap kategori
const generateDummyData = (category: String) => {
    return Array.from({ length: 100 }, (_, index) => ({
        id: `${category}-${index + 1}`,
        title: `${category} Movie ${index + 1}`,
        description: `Deskripsi untuk ${category} Movie ${index + 1}`,
        image: 'https://via.placeholder.com/150', // Placeholder image URL
    }));
};

type Data = {
    [key: string]: Movie[];
};


const data: Data = {
    Aksi: generateDummyData('Aksi'),
    Drama: generateDummyData('Drama'),
    Komedi: generateDummyData('Komedi'),
    Romantis: generateDummyData('Romantis'),
    Horor: generateDummyData('Horor'),
};

type Movie = {
    id: string;
    title: string;
    description: string;
    image: string;
};

type CategorySectionProps = {
    category: string;
    movies: Movie[];
};

const CategorySection: React.FC<CategorySectionProps> = ({ category, movies }) => (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Film {category}</Text>
        <FlatList
            horizontal
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
            )}
            showsHorizontalScrollIndicator={false}
        />
    </View>
);


const PopularGamesScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari film favorit Anda"
                    placeholderTextColor="#aaa"
                />
                <Icon name="mic-outline" size={20} color="#aaa" style={styles.micIcon} />
            </View>

            {/* Categories */}
            <View style={styles.categoryContainer}>
                {categories.map((category) => (
                    <TouchableOpacity key={category} style={styles.categoryButton}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Movie Sections */}
            {categories.map((category) => (
                <CategorySection key={category} category={category} movies={data[category]} />
            ))}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    micIcon: {
        marginLeft: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    categoryButton: {
        backgroundColor: '#e0e0e0',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8,
    },
    categoryText: {
        color: '#333',
        fontSize: 14,
    },
    sectionContainer: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    card: {
        width: 150,
        marginRight: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
    },
    cardImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    cardDescription: {
        fontSize: 12,
        color: '#777',
    },
});

export default PopularGamesScreen;

