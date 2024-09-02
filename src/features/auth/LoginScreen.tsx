import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';


type RootStackParamList = {
    SplashScreen: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={2000}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' }}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Welcome Text */}
            <Animatable.Text animation="fadeInUp" duration={1500} style={styles.welcomeText}>
                Welcome Back!
            </Animatable.Text>

            {/* Input Fields */}
            <Animatable.View animation="fadeInUp" duration={1500} style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Icon name="mail-outline" size={20} color="#05375a" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        placeholderTextColor="#666666"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Icon name="lock-closed-outline" size={20} color="#05375a" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        placeholderTextColor="#666666"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
            </Animatable.View>

            {/* Forgot Password */}
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Home')}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.signUpWrapper}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signUpLink}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 150,
        height: 150,
    },
    welcomeText: {
        color: '#05375a',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 10,
        color: '#05375a',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#009387',
        fontSize: 14,
        textAlign: 'right',
        marginTop: 10,
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#009387',
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signUpText: {
        color: '#666666',
        fontSize: 14,
    },
    signUpLink: {
        color: '#009387',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
