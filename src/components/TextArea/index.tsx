import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

export default function TextArea({ ...rest }: TextInputProps) {
    return <Container {...rest} />;
}
