import React from 'react';

import { Container, AvatarImage } from './styles';

type AvatarProps = {
    urlImage: string;
};

export default function Avatar({ urlImage }: AvatarProps) {
    return (
        <Container>
            <AvatarImage source={{ uri: urlImage }} />
        </Container>
    );
}
