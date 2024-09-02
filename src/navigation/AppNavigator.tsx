
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SplashScreen, LoginScreen, RegisterScreen } from '@src/features/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@src/features/dashboard';
import PopularGamesScreen from '../../screens/PopularGamesScreen';
// import ProfileScreen from '../../screens/ProfileScreen';
import { ProfileScreen } from '@src/features/profile';
// Define types for your stack navigator
export type RootStackParamList = {
    SplashScreen: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

type HomeTabParamList = {
    Beranda: undefined;
    'Game Popular': undefined;
    Profil: undefined;
};

const getTabBarIcon = (routeName: string, color: string, size: number) => {
    let iconName = '';
    if (routeName === 'Beranda') {
        iconName = 'home';
    } else if (routeName === 'Game Popular') {
        iconName = 'game-controller';
    } else if (routeName === 'Profil') {
        iconName = 'person';
    }
    return <Icon name={iconName} size={size} color={color} />;
};

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
            })}
        >
            <Tab.Screen name="Beranda" component={HomeScreen} />
            <Tab.Screen name="Game Popular" component={PopularGamesScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
