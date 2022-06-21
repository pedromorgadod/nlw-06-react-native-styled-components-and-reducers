import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({ size: 'large', color: theme.colors.primary })``;
