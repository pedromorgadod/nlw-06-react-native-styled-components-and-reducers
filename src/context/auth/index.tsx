import React, { createContext, ReactNode, useMemo, useReducer } from 'react';

import { reducer } from './reducer';
import { IAuthContext, IAuthState } from './types';

const initialState: IAuthState = {
    user: null,
    loading: false,
    authenticated: false,
};

const initialContext: IAuthContext = {
    state: initialState,
    dispatch: () => null,
};

export const AuthContext = createContext<IAuthContext>(initialContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
