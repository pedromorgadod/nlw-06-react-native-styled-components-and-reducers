import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const { secondary100, secondary40, heading } = theme.colors;

export const Container = styled(LinearGradient).attrs({ colors: [secondary100, secondary40] })`
    width: 100%;
    height: 90px;
    padding: ${StatusBar.currentHeight}px 24px 0px 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ArrowLeft = styled(Feather).attrs({ name: 'arrow-left', size: 24, color: heading })``;

export const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${theme.fonts.title700};
    font-size: 20px;
    color: ${theme.colors.heading};
`;
