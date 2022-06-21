import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Linking, Platform, Share } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AppointmentProps } from '../../components/Appointment';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import Header from '../../components/Header';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Loading from '../../components/Loading';
import { Member, MemberProps } from '../../components/Member';
import { api } from '../../services/api';
import { Banner, BannerContent, Footer, Icon, Members, SubTitle, Title } from './styles';

type Params = {
    guildSelected: AppointmentProps;
};

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
};

export default function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>(null);
    const [loading, setLoading] = useState(true);

    const route = useRoute();
    const { guildSelected } = route.params as Params;

    const fetchGuildWidget = useCallback(async () => {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        } catch {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');
        } finally {
            setLoading(false);
        }
    }, [guildSelected.guild.id]);

    const handleShareInvitation = () => {
        const message = Platform.OS === 'ios' ? `Junte-se a ${guildSelected.guild.name}` : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite,
        });
    };

    const handleOpenGuild = () => {
        Linking.openURL(widget.instant_invite);
    };

    useEffect(() => {
        fetchGuildWidget();
    }, [fetchGuildWidget]);

    const MemoizedListDivider = React.useCallback(() => <ListDivider centered />, []);

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner && (
                        <BorderlessButton onPress={handleShareInvitation}>
                            <Icon />
                        </BorderlessButton>
                    )
                }
            />

            <Banner>
                <BannerContent>
                    <Title>{guildSelected.guild.name}</Title>
                    <SubTitle>{guildSelected.description}</SubTitle>
                </BannerContent>
            </Banner>

            {loading ? (
                <Loading />
            ) : (
                <>
                    <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />
                    <Members
                        data={widget.members}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Member data={item} />}
                        ItemSeparatorComponent={MemoizedListDivider}
                    />
                </>
            )}

            {guildSelected.guild.owner && (
                <Footer>
                    <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
                </Footer>
            )}
        </Background>
    );
}
