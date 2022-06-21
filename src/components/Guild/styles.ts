import { Feather as FeatherIcon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(TouchableOpacity).attrs({ activeOpacity: 0.7 })`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 20px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
    margin-bottom: 4px;
`;

export const Type = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

export const Feather = styled(FeatherIcon).attrs({ name: 'chevron-right', color: theme.colors.heading, size: 24 })``;
