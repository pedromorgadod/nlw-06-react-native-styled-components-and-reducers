import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

export default function ButtonAdd({ ...rectButtonProps }: RectButtonProps) {
    return (
        <Container {...rectButtonProps}>
            <Icon />
        </Container>
    );
}
