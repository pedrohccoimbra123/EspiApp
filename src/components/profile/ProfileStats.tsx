import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/Colors';

export default function ProfileStats() {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.number}>23</Text>
        <Text style={styles.label}>Favoritos</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>12</Text>
        <Text style={styles.label}>Visitados</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>5</Text>
        <Text style={styles.label}>Curtidas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  label: {
    fontSize: 14,
    color: colors.subText,
  },
});
