import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import SectionTitle from '../components/profile/SectionTitle';
import ProfileOptionItem from '../components/profile/ProfileOptionItem';
import BottomBar from '../components/BottomBar';
import { commonStyles } from '../styles/common';
import { RootStackParamList } from '../navigation';


export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState<'home' | 'profile'>('profile');

  const handleHomePress = () => {
    setActiveTab('home');
    navigation.navigate('Main'); // ✅ Redireciona para Home
  };

  const handleProfilePress = () => {
    setActiveTab('profile');
  };

  return (
    <View style={commonStyles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileHeader />
        <ProfileStats />
        
        <SectionTitle title="Conta" />
        <ProfileOptionItem label="Editar Perfil" onPress={() => {}} />
        <ProfileOptionItem label="Configurações" onPress={() => {}} />
        <ProfileOptionItem label="Sair" onPress={() => {}} type="danger" />
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
  container: {
    padding: 16,
    paddingBottom: 100,
  },
});
