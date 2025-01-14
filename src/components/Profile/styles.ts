import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const User = styled.View`
    flex-direction: row;
`;

export const Greeting = styled.Text`
    font-family: ${theme.fonts.title500};
    font-size: 24px;
    color: ${theme.colors.heading};
    margin-right: 6px;
`;

export const UserName = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.heading};
`;

export const Message = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
`;
