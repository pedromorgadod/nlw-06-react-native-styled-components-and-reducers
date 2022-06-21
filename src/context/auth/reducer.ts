import { Actions, IAction, IAuthState } from './types';

export function reducer(state: IAuthState, action: IAction): IAuthState {
    switch (action.type) {
        case Actions.LOGIN:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
            };

        case Actions.LOGOUT:
            return {
                ...state,
                authenticated: false,
                user: null,
            };

        case Actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        default:
            return state;
    }
}
