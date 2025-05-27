// src/screens/Recomendacoes.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation';
import { Item } from '../types/item';
import { commonStyles } from '../styles/common';

import CardItem from '../components/CardItem';
import BottomBar from '../components/BottomBar';
import { MatchService } from '../service/MatchService';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Recomendacoes() {
    const navigation = useNavigation<NavigationProp>();
    const [recommendedItem, setRecommendedItem] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'today' | 'recomendacoes'>('recomendacoes');

    const fetchRecommendation = async () => {
        setLoading(true);
        try {
            const { best_match } = await MatchService.getBestMatch("Quero natureza e tranquilidade");

            const allItems = await MatchService.getAllItems();
            const matched = allItems.items.find((item: Item) =>
                item.title.toLowerCase() === best_match.toLowerCase()
            );

            if (matched) {
                setRecommendedItem([matched]);
            } else {
                Alert.alert("Nenhum local encontrado para:", best_match);
            }
        } catch (err) {
            Alert.alert("Erro ao buscar recomendação", (err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecommendation();
    }, []);

    const handleHomePress = () => {
        setActiveTab('home');
        fetchRecommendation(); // 🔥 Recarrega a recomendação ao clicar em "Descubra"
    };

    const handleProfilePress = () => {
        setActiveTab('profile');
        navigation.navigate('Profile');
    };

    const handleTodayPress = () => {
        setActiveTab('today');
        navigation.navigate('Today');
    };

    const handleRecomendacoesPress = () => {
        setActiveTab('recomendacoes');
        fetchRecommendation(); // também pode recarregar caso queira
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
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <FlatList
                        data={recommendedItem}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCard}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
            <BottomBar
                activeTab={activeTab}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
                onTodayPress={handleTodayPress}
                onRecomendacoesPress={handleRecomendacoesPress}
            />
        </View>
    );
}
