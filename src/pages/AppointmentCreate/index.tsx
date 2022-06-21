import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import Background from '../../components/Background';
import Button from '../../components/Button';
import CategorySelect from '../../components/CategorySelect';
import { GuildProps } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';
import Header from '../../components/Header';
import ModalView from '../../components/ModalView';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import database from '../../configs/database';
import { Guilds } from '../Guilds';

import {
    CategoryLabel,
    CharacterLimit,
    ChevronRight,
    Column,
    Container,
    DateLabel,
    Divider,
    Field,
    Footer,
    Form,
    Image,
    Label,
    SecondField,
    Select,
    SelectBody,
} from './styles';

export default function AppointmentCreate() {
    const [category, setCategory] = useState(null);
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation();

    const handleCategorySelect = (categoryId: number) => {
        setCategory(categoryId);
    };

    const handleOpenGuilds = () => {
        setOpenGuildsModal(true);
    };

    const handleCloseGuilds = () => {
        setOpenGuildsModal(false);
    };

    const handleGuildSelect = (guildSelect: GuildProps) => {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    };

    const handleSave = async () => {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description,
        };

        const storage = await AsyncStorage.getItem(database.collection_appointments);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(database.collection_appointments, JSON.stringify([...appointments, newAppointment]));

        navigation.navigate('Home');
    };

    return (
        <Container>
            <Background>
                <Header title="Agendar partida" />
                <ScrollView>
                    <CategoryLabel>Categoria</CategoryLabel>

                    <CategorySelect hasCheckBox setCategory={handleCategorySelect} categorySelected={category} />

                    <Form>
                        <RectButton onPress={handleOpenGuilds}>
                            <Select>
                                {guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <Image />}

                                <SelectBody>
                                    <Label>{guild.name ? guild.name : 'Selecione um servidor'}</Label>
                                </SelectBody>

                                <ChevronRight />
                            </Select>
                        </RectButton>

                        <Field>
                            <View>
                                <DateLabel>Dia e mês</DateLabel>

                                <Column>
                                    <SmallInput maxLength={2} onChangeText={setDay} />
                                    <Divider>/</Divider>
                                    <SmallInput maxLength={2} onChangeText={setMonth} />
                                </Column>
                            </View>

                            <View>
                                <DateLabel>Hora e minuto</DateLabel>

                                <Column>
                                    <SmallInput maxLength={2} onChangeText={setHour} />
                                    <Divider>:</Divider>
                                    <SmallInput maxLength={2} onChangeText={setMinute} />
                                </Column>
                            </View>
                        </Field>

                        <SecondField>
                            <Label>Descrição</Label>
                            <CharacterLimit>Max 100 caracteres</CharacterLimit>
                        </SecondField>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />

                        <Footer>
                            <Button title="Agendar" onPress={handleSave} />
                        </Footer>
                    </Form>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </Container>
    );
}
