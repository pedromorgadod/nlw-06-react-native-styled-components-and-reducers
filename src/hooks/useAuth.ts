import { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Actions } from '../context/auth/types';

import * as auth from '../services/auth';

export default function useAuth() {
    const { state, dispatch } = useContext(AuthContext);

    async function signIn() {
        dispatch({ type: Actions.SET_LOADING, payload: true });

        const user = await auth.signIn();
        if (user) {
            dispatch({ type: Actions.LOGIN, payload: user });
        }

        dispatch({ type: Actions.SET_LOADING, payload: false });
    }

    async function signOut() {
        dispatch({ type: Actions.LOGOUT });
        auth.signOut();
    }

    async function loadUser() {
        const user = await auth.loadUserStorageData();
        if (user) {
            dispatch({ type: Actions.LOGIN, payload: user });
        }
    }

    return { state, dispatch, signIn, signOut, loadUser };
}
