import React from 'react';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Inter_400Regular as InterRegular, Inter_500Medium as InterMedium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium as RajdhaniMedium, Rajdhani_700Bold as RajdhaniBold } from '@expo-google-fonts/rajdhani';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Background from './components/Background';
import { AppContextProvider } from './context';
import Routes from './routes';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
    const [fontsLoaded] = useFonts({
        InterRegular,
        InterMedium,
        RajdhaniMedium,
        RajdhaniBold,
    });

    const statusBarProps = {
        backgroundColor: 'transparent',
        style: 'light' as StatusBarStyle,
        translucent: true,
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Background>
                <StatusBar {...statusBarProps} />
                <AppContextProvider>
                    <Routes />
                </AppContextProvider>
            </Background>
        </GestureHandlerRootView>
    );
}
