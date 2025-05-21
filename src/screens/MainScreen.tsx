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

  useEffect(() => {
    setData(localItems);
  }, []);

  const handleHomePress = () => {
    // Está na própria tela Main, então não faz nada
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
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
        activeTab="home"
        onHomePress={handleHomePress}
        onProfilePress={handleProfilePress}
      />
    </View>
  );
}
