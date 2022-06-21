import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './appRoutes';
import SignIn from '../pages/SignIn';

import useAuth from '../hooks/useAuth';

export default function Routes() {
    const { state } = useAuth();

    return <NavigationContainer>{state.authenticated ? <AppRoutes /> : <SignIn />}</NavigationContainer>;
}
