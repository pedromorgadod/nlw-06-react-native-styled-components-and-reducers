import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Content, Feather, Title, Type } from './styles';

import { GuildIcon } from '../GuildIcon';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
};

type Props = TouchableOpacityProps & {
    data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
    return (
        <Container {...rest}>
            <GuildIcon guildId={data.id} iconId={data.icon} />
            <Content>
                <Title>{data.name}</Title>
                <Type>{data.owner ? 'Administrador' : 'Convidado'}</Type>
            </Content>
            <Feather />
        </Container>
    );
}
