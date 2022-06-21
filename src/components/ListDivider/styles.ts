import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    height: 1px;
    width: ${(props) => (props.centered ? '80%' : '100%')};
    align-self: flex-end;
    background-color: ${theme.colors.secondary40};
    margin: 12px auto;
`;
