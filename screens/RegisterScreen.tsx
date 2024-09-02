import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


type RootStackParamList = {
    SplashScreen: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};


type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icon name="arrow-back" size={24} color="#333" />
                <Text style={styles.headerText}>Create Account</Text>
                <Icon name="help-circle-outline" size={24} color="#333" />
            </View>

            {/* Form Title */}
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Please fill in the details below to register.</Text>

            {/* Full Name Input */}
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#aaa"
            />

            {/* Email Address Input */}
            <Text style={styles.label}>Email Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email address"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
            />
            <Text style={styles.helperText}>Please enter a valid email address.</Text>

            {/* Password Input */}
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Create a password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={20} color="#aaa" />
                </TouchableOpacity>
            </View>

            {/* Confirm Password Input */}
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Re-enter your password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!isConfirmPasswordVisible}
                />
                <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                    <Icon name={isConfirmPasswordVisible ? "eye-off" : "eye"} size={20} color="#aaa" />
                </TouchableOpacity>
            </View>
            <Text style={styles.helperText}>Passwords do not match.</Text>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <Text style={styles.loginLink}>Already have an account? <TouchableOpacity onPress={() => navigation.replace('Login')} ><Text style={styles.loginText}>Log in</Text></TouchableOpacity></Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 6,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    inputPassword: {
        flex: 1,
        height: 50,
    },
    helperText: {
        fontSize: 12,
        color: '#FF0000',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    registerButton: {
        backgroundColor: '#00bfff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    registerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    loginLink: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
    loginText: {
        color: '#00bfff',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
