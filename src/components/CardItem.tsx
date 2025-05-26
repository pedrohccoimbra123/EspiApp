import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Item } from 'types/item';
import LikeBadge from './LikeBadge';

type Props = {
  item: Item;
  onPress: () => void;
};

export default function CardItem({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {item.image && (
        <Image
          source={
            typeof item.image === 'string'
              ? { uri: item.image }
              : item.image
          }
          style={styles.image}
        />
      )}
      <View style={{ marginBottom: 0, marginTop: 0 }}>
        <LikeBadge id_card={item.id} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'AncizarSerif-Regular',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'AncizarSerif-Regular',
    color: '#666',
  },
});
