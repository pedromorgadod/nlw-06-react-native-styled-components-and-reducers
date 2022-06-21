import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import Loading from '../../components/Loading';
import { api } from '../../services/api';

import { Container, GuildList } from './styles';

type GuildsProps = {
    handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds() {
        try {
            const response = await api.get('/users/@me/guilds');
            setGuilds(response.data);
        } catch {
            Alert.alert('Erro');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGuilds();
    }, []);

    const MemoizedListDivider = React.useCallback(() => <ListDivider />, []);

    return (
        <Container>
            {loading ? (
                <Loading />
            ) : (
                <GuildList
                    data={guilds}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildSelect(item)} />}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={MemoizedListDivider}
                    ListHeaderComponent={MemoizedListDivider}
                />
            )}
        </Container>
    );
}
