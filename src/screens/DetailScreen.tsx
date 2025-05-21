import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { localItems } from '../data/localData';
import BottomBar from '../components/BottomBar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NearbyPlaces from '../components/NearbyPlaces';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DetailScreen() {
  const { params } = useRoute<DetailRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const item = localItems.find((i) => i.id === params.itemId);
  const [activeTab, setActiveTab] = useState<'home' | 'profile'>('home');

  if (!item) return <Text>Item não encontrado.</Text>;

  const handleHomePress = () => {
    setActiveTab('home');
    navigation.navigate('Main');
  };

  const handleProfilePress = () => {
    setActiveTab('profile');
    navigation.navigate('Profile');
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

        <NearbyPlaces />
      </ScrollView>

      <BottomBar
        activeTab={activeTab}
        onHomePress={handleHomePress}
        onProfilePress={handleProfilePress}
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
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
  },
  imageText: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});
