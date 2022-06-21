import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, IconWrapper, Icon, Title } from './styles';
import DiscordLogo from '../../assets/discord.png';

type ButtonIconProps = RectButtonProps & {
    title: string;
};

export default function ButtonIcon({ title, ...rectButtonProps }: ButtonIconProps) {
    return (
        <Container {...rectButtonProps}>
            <IconWrapper>
                <Icon source={DiscordLogo} />
            </IconWrapper>
            <Title>{title}</Title>
        </Container>
    );
}
