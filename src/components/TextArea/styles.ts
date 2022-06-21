import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled(TextInput)`
    width: 100%;
    height: 95px;
    background-color: ${theme.colors.secondary40};
    color: ${theme.colors.heading};
    border-radius: 8px;
    font-family: ${theme.fonts.text400};
    font-size: 13px;
    margin-right: 4px;
    border-width: 1px;
    border-color: ${theme.colors.secondary50};
    padding: 0px 16px;
    padding-top: 16px;
    align-items: flex-start;
`;
