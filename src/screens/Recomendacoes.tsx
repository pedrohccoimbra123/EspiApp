// src/screens/Recomendacoes.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation';
import { Item } from '../types/item';
import { localItems } from '../data/localData';
import { commonStyles } from '../styles/common';

import CardItem from '../components/CardItem';
import BottomBar from '../components/BottomBar';
import { MatchService } from 'service/MatchService';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Recomendacoes() {
    const navigation = useNavigation<NavigationProp>();
    const [recommendedItem, setRecommendedItem] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'today' | 'recomendacoes'>('recomendacoes');

    useEffect(() => {
        async function fetchRecommendation() {
            try {
                const { best_match } = await MatchService.getBestMatch("Quero natureza e tranquilidade");
                const matched = localItems.find(item => item.title.toLowerCase() === best_match.toLowerCase());

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
        }

        fetchRecommendation();
    }, []);

    const handleHomePress = () => {
        setActiveTab('home');
        navigation.navigate('Main');
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
        // já está na tela, não faz nada
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
