import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../theme';

const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

export const Container = styled(LinearGradient).attrs({ colors: [secondary50, secondary70] })`
    width: 104px;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 8px;
`;

export const Content = styled(LinearGradient).attrs(({ checked }) => ({
    colors: [checked ? secondary85 : secondary50, secondary40],
}))`
    width: 100px;
    height: 116px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    opacity: ${(props) => (props.checked ? 1 : 0.5)};
`;

export const CheckBox = styled.View`
    position: absolute;
    top: 7px;
    right: 7px;
    border-radius: 12px;
    width: ${(props) => (props.checked ? '10px' : '12px')};
    height: ${(props) => (props.checked ? '10px' : '12px')};
    background-color: ${(props) => (props.checked ? theme.colors.primary : theme.colors.secondary100)};
    border: ${(props) => (props.checked ? 'none ' : `2px solid ${theme.colors.secondary50}`)};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 15px;
    margin-top: 15px;
`;
