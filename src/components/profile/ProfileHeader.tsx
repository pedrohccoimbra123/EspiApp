import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../../styles/Colors';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://i.pravatar.cc/150' }} 
        style={styles.avatar} 
      />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.bio}>Apaixonado por Belém e tecnologia 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'AncizarSerif-Regular',
    color: colors.text,
  },
  bio: {
    fontSize: 14,
    color: colors.subText,
    textAlign: 'center',
    fontFamily: 'AncizarSans-Regular'
  },
});
