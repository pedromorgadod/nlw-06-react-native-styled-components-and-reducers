import { Dispatch } from 'react';

export enum Actions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SET_LOADING = 'SET_LOADING',
}

export type IUser = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};

export type IAuthState = {
    user: IUser;
    loading: boolean;
    authenticated: boolean;
};

export type IAuthContext = {
    state: IAuthState;
    dispatch: IDispatch;
};

export type IAction =
    | { type: Actions.LOGIN; payload: IUser }
    | { type: Actions.LOGOUT }
    | { type: Actions.SET_LOADING; payload: boolean };

export type IDispatch = Dispatch<IAction>;
