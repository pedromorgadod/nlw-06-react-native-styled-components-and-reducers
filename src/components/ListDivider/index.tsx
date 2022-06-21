import React from 'react';
import { Container } from './styles';

type ListDividerProps = {
    centered?: boolean;
};

export default function ListDivider({ centered }: ListDividerProps) {
    return <Container centered={centered} />;
}

ListDivider.defaultProps = {
    centered: false,
};
