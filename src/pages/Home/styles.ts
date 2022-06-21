import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
    width: 100%;
    padding: 0px 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${StatusBar.currentHeight + 26}px;
    margin-bottom: 42px;
`;

export const List = styled.FlatList.attrs({ contentContainerStyle: { paddingBottom: 69 } })`
    margin-top: 24px;
    margin-left: 24px;
`;
