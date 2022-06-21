import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GuildIcon } from '../GuildIcon';

import {
    Category,
    Container,
    Content,
    Date,
    DateInfo,
    Footer,
    Header,
    Player,
    PlayersInfo,
    PlayerSvg,
    Title,
} from './styles';

import CalendarSvg from '../../assets/calendar.svg';
import { GuildProps } from '../Guild';

import categories from '../../utils/categories';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: number;
    date: string;
    description: string;
};

type Props = RectButtonProps & {
    data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter((item) => item.id === data.category);
    const { owner } = data.guild;

    return (
        <RectButton {...rest}>
            <Container>
                <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />

                <Content>
                    <Header>
                        <Title>{data.guild.name}</Title>

                        <Category>{category.title}</Category>
                    </Header>

                    <Footer>
                        <DateInfo>
                            <CalendarSvg />

                            <Date>{data.date}</Date>
                        </DateInfo>

                        <PlayersInfo>
                            <PlayerSvg owner={owner} />

                            <Player owner={owner}>{owner ? 'Anfitrião' : 'Visitante'}</Player>
                        </PlayersInfo>
                    </Footer>
                </Content>
            </Container>
        </RectButton>
    );
}
