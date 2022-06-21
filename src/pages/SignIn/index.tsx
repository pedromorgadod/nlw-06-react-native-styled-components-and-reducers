import React, { useEffect } from 'react';
import { Container, Illustration, Content, Title, SubTitle } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

import useAuth from '../../hooks/useAuth';

export default function SignIn() {
    const { signIn, loadUser } = useAuth();

    useEffect(() => {
        const callLoadUser = async () => {
            await loadUser();
        };

        callLoadUser();
    }, [loadUser]);

    return (
        <Container>
            <Illustration source={IllustrationImg} />
            <Content>
                <Title>
                    Conecte-se {'\n'}e organize suas {'\n'} jogatinas
                </Title>
                <SubTitle>Crie grupos para jogar seus games {'\n'} favoritos com seus amigos</SubTitle>
                <ButtonIcon title="Entrar com Discord" onPress={signIn} />
            </Content>
        </Container>
    );
}
