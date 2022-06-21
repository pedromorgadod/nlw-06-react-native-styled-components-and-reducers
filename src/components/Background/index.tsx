import React, { ReactNode } from 'react';

import { Container } from './styles';

type Props = {
    children: ReactNode;
};

export default function Background({ children }: Props) {
    return <Container>{children}</Container>;
}
