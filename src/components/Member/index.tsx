import React from 'react';
import Avatar from '../Avatar';
import { Container, Status, StatusBullet, StatusName, Title } from './styles';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
};

type Props = {
    data: MemberProps;
};

export function Member({ data }: Props) {
    const isOnline = data.status === 'online';

    return (
        <Container>
            <Avatar urlImage={data.avatar_url} />

            <>
                <Title>{data.username}</Title>

                <Status>
                    <StatusBullet isOnline />

                    <StatusName>{isOnline ? 'Disponível' : 'Ocupado'}</StatusName>
                </Status>
            </>
        </Container>
    );
}
