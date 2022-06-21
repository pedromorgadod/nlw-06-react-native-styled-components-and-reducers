import { CDN_IMAGE } from '@env';
import React from 'react';

import DiscordSvg from '../../assets/discord.svg';

import { Container, Image } from './styles';

type Props = {
    guildId: string;
    iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <Container>
            {iconId ? <Image source={{ uri }} resizeMode="cover" /> : <DiscordSvg width={40} height={40} />}
        </Container>
    );
}
