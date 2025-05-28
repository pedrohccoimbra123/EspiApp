import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { localItems } from '../data/localData';
import BottomBar from '../components/BottomBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import NearbyPlaces from '../components/NearbyPlaces';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TodayScreen() {
    const navigation = useNavigation<NavigationProp>();
    const item = localItems.find((i) => i.id === '1');
    const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'today'>('today');

    if (!item) return <Text>Item não encontrado.</Text>;

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

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Image
                        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    {item.imageText && <Text style={styles.imageText}>{item.imageText}</Text>}
                </View>

                <NearbyPlaces excludeItemId="1" />
            </ScrollView>

            <BottomBar
                activeTab={activeTab}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
                onTodayPress={handleTodayPress}
                onRecomendacoesPress={handleTodayPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    container: {
        padding: 16,
    },
    image: {
        width: '100%',
        height: 340,
        borderRadius: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: 'AncizarSerif-Regular',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontFamily: 'AncizarSerif-Regular',
        color: '#444',
    },
    imageText: {
        marginTop: 5,
        fontSize: 14,
        color: '#666',
        fontFamily: 'AncizarSans-Regular',
    },
});
