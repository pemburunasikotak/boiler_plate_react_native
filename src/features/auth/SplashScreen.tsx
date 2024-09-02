import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';


import { NativeStackScreenProps } from '@react-navigation/native-stack';



type RootStackParamList = {
    SplashScreen: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;


const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login'); // Navigate to the Login screen after 10 seconds
        }, 5000); // 1000 milliseconds = 1 seconds

        // Cleanup timer if the component is unmounted
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Animatable.Image
                animation="bounceIn"
                duration={2000}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' }}
                style={styles.logo}
                resizeMode="contain"
            />
            <Animatable.Text
                animation="fadeInUp"
                duration={2000}
                style={styles.title}>
                Welcome to MyApp
            </Animatable.Text>
            <Animatable.Text
                animation="fadeInUp"
                duration={2000}
                delay={500}
                style={styles.tagline}>
                The best app for all your needs
            </Animatable.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    tagline: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '300',
        marginTop: 10,
    },
});

export default SplashScreen;
