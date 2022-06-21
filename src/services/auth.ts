import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SCOPE, CLIENT_ID, CDN_IMAGE, REDIRECT_URI, RESPONSE_TYPE } from '@env';

import { api } from './api';
import database from '../configs/database';
import { IUser } from '../context/auth/types';

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    };
};

export async function signIn(): Promise<IUser> {
    try {
        const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        const { type, params } = (await AuthSession.startAsync({ authUrl })) as AuthorizationResponse;

        if (type === 'success' && !params.error) {
            api.defaults.headers.common.Authorization = `Bearer ${params.access_token}`;

            const userInfo = await api.get('/users/@me');

            const firstName = userInfo.data.username.split(' ')[0];
            userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

            const token = params.access_token;

            const user: IUser = {
                ...userInfo.data,
                firstName,
                token,
            };

            await AsyncStorage.setItem(database.collection_users, JSON.stringify(user));

            return user;
        }

        return null;
    } catch (error) {
        return null;
    }
}

export async function signOut() {
    await AsyncStorage.removeItem(database.collection_users);
}

export async function loadUserStorageData(): Promise<IUser> {
    const storage = await AsyncStorage.getItem(database.collection_users);

    if (!storage) return null;

    const userLogged = JSON.parse(storage) as IUser;
    api.defaults.headers.common.Authorization = `Bearer ${userLogged.token}`;

    return userLogged;
}
