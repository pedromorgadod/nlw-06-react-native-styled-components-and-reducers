import { Fontisto } from '@expo/vector-icons';
import { FlatList, ImageBackground } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Banner = styled(ImageBackground)`
    width: 100%;
    height: 234px;
`;

export const BannerContent = styled.View`
    width: 100%;
    height: 234px;
`;

export const Footer = styled.View`
    padding: 20px 24px;
    margin-bottom: ${getBottomSpace()};
`;

export const Icon = styled(Fontisto).attrs({ size: 24, color: theme.colors.primary })``;

export const Members = styled(FlatList)`
    margin-left: 24px;
    margin-top: 27px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
    font-size: 13px;
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.heading};
    line-height: 21px;
`;
