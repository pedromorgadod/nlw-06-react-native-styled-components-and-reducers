import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { Appointment, AppointmentProps } from '../../components/Appointment';
import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Loading from '../../components/Loading';
import Profile from '../../components/Profile';
import database from '../../configs/database';

import { Header, List } from './styles';

export default function Home() {
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation();

    const handleCategorySelect = (categoryId: number) => {
        if (categoryId === category) setCategory(null);
        else setCategory(categoryId);
    };

    const handleAppointmentCreate = () => {
        navigation.navigate('AppointmentCreate');
    };

    const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
        navigation.navigate('AppointmentDetails', { guildSelected });
    };

    const loadAppointments = async () => {
        const response = await AsyncStorage.getItem(database.collection_appointments);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter((item) => item.category === category));
        } else {
            setAppointments(storage);
        }

        setLoading(false);
    };

    useFocusEffect(() => {
        loadAppointments();
    });

    const MemoizedListDivider = React.useCallback(() => <ListDivider />, []);

    return (
        <Background>
            <Header>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </Header>

            <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

                    <List
                        data={appointments}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} onPress={() => handleAppointmentDetails(item)} />
                        )}
                        ItemSeparatorComponent={MemoizedListDivider}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </Background>
    );
}
