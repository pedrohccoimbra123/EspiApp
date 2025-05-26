import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CommentSection'>;

type RatingBadgeProps = {
  id_card: string; // 🔥 Recebe o id do card como prop
};

const RatingBadge = ({ id_card }: RatingBadgeProps) => {
  const navigation = useNavigation<NavigationProp>();
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const randomRating = Math.random() * 0.5 + 4.5;
    const formatted = parseFloat(randomRating.toFixed(1));
    setRating(formatted);
  }, []);

  const handlePress = () => {
    navigation.navigate('CommentSection', { id_card }); // 🔥 Envia o id_card na navegação
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={0.7}>
      <Text style={styles.ratingText}>{rating}</Text>
      <Icon name="star" size={12} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 45,
    alignSelf: 'flex-start',
    marginTop: 0,
  },
  ratingText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginRight: 6,
  },
});

export default RatingBadge;
