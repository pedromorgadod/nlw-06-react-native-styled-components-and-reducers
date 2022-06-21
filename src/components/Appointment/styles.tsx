import React from 'react';
import styled from 'styled-components/native';

import PlayerSvgBase from '../../assets/player.svg';
import theme from '../../theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-self: center;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const Category = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-right: 24px;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PlayersInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Date = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
    font-size: 13px;
    margin-left: 7px;
`;

export const Player = styled.Text`
    font-family: ${theme.fonts.text500};
    font-size: 13px;
    margin-left: 7px;
    margin-right: 24px;
    color: ${(props) => (props.owner ? theme.colors.primary : theme.colors.on)};
`;

export const GuildIconContainer = styled.View`
    height: 68px;
    width: 64px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

export function PlayerSvg({ owner }) {
    return <PlayerSvgBase fill={owner ? theme.colors.primary : theme.colors.on} />;
}
