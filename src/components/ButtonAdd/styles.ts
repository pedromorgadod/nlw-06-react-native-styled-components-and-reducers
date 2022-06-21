import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../theme';

export const Container = styled(RectButton)`
    height: 48px;
    width: 48px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({ name: 'plus', color: theme.colors.heading, size: 24 })``;
