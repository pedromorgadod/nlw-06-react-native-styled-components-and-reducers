import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StatusBullet = styled.View`
    width: 8;
    height: 8;
    border-radius: 4;
    margin-right: 9;
`;

export const StatusName = styled.View`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

export const Title = styled.Text`
    width: 8;
    height: 8;
    border-radius: 4;
    margin-right: 9;
`;
