import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme';

const { secondary50, secondary70 } = theme.colors;

export const Container = styled(LinearGradient).attrs({ colors: [secondary50, secondary70] })`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
`;

export const AvatarImage = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 8px;
`;
