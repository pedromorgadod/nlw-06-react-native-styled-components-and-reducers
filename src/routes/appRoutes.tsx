import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { AppointmentProps } from '../components/Appointment';

import AppointmentCreate from '../pages/AppointmentCreate';
import AppointmentDetails from '../pages/AppointmentDetails';
import Home from '../pages/Home';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
    const screenOptions: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
        </Navigator>
    );
}

type AppRootParamList = {
    Home: undefined;
    AppointmentCreate: undefined;
    AppointmentDetails: { guildSelected: AppointmentProps };
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface RootParamList extends AppRootParamList {}
    }
}
