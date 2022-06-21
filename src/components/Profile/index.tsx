import React from 'react';
import { Alert, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import useAuth from '../../hooks/useAuth';

import Avatar from '../Avatar';
import { Container, User, Greeting, UserName, Message } from './styles';

export default function Profile() {
    const { state, signOut } = useAuth();

    const handleSignOut = () => {
        Alert.alert('Logout', 'Deseja sair do GamePlay?', [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: () => signOut(),
            },
        ]);
    };

    return (
        <Container>
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={state.user.avatar} />
            </RectButton>
            <View>
                <User>
                    <Greeting>Olá,</Greeting>
                    <UserName>{state.user.firstName}</UserName>
                </User>
                <Message>Hoje é dia de vitória!</Message>
            </View>
        </Container>
    );
}
