import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ArrowLeft, Container, Title } from './styles';

type Props = {
    title: string;
    action?: ReactNode;
};

export default function Header({ title, action }: Props) {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <BorderlessButton onPress={handleGoBack}>
                <ArrowLeft />
            </BorderlessButton>

            <Title>{title}</Title>

            {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
        </Container>
    );
}

Header.defaultProps = {
    action: null,
};
