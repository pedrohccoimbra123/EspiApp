import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation';
import { Item } from '../types/item';
import { localItems } from '../data/localData';
import { commonStyles } from '../styles/common';

import CardItem from '../components/CardItem';
import BottomBar from '../components/BottomBar';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function MainScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [data, setData] = useState<Item[]>([]);
    const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'today'>('home');

    useEffect(() => {
        setData(localItems);
    }, []);

    const handleHomePress = () => {
        setActiveTab('home');
        // Já está na Main, não navega
    };

    const handleProfilePress = () => {
        setActiveTab('profile');
        navigation.navigate('Profile');
    };

    const handleTodayPress = () => {
        setActiveTab('today');
        navigation.navigate('Today');
    };

    const renderCard = useCallback(
        ({ item }: { item: Item }) => (
            <CardItem
                item={item}
                onPress={() => navigation.navigate('Detail', { itemId: item.id })}
            />
        ),
        [navigation]
    );

    return (
        <View style={commonStyles.wrapper}>
            <View style={commonStyles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCard}
                    initialNumToRender={8}
                    maxToRenderPerBatch={15}
                    windowSize={7}
                    updateCellsBatchingPeriod={50}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <BottomBar
                activeTab={activeTab}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
                onTodayPress={handleTodayPress}
            />
        </View>
    );
}
