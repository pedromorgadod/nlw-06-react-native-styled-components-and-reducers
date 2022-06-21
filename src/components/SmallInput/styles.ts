import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(TextInput).attrs({ keyboardType: 'numeric' })`
    width: 48px;
    height: 48px;
    background-color: ${theme.colors.secondary40};
    color: ${theme.colors.heading};
    border-radius: 8px;
    font-family: ${theme.fonts.text400};
    font-size: 13px;
    margin-right: 4px;
    text-align: center;
    border-width: 1px;
    border-color: ${theme.colors.secondary50};
`;
