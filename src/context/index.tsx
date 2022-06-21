import React, { ReactNode } from 'react';

import { AuthContextProvider } from './auth';

export function AppContextProvider({ children }: { children: ReactNode }) {
    return <AuthContextProvider>{children}</AuthContextProvider>;
}
