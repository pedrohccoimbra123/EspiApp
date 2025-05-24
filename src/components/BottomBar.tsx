import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/Colors';

type Props = {
  activeTab: 'home' | 'profile' | 'today';
  onHomePress: () => void;
  onProfilePress: () => void;
  onTodayPress: () => void;
};

export default function BottomBar({
                                    activeTab,
                                    onHomePress,
                                    onProfilePress,
                                    onTodayPress,
                                  }: Props) {
  return (
      <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={onTodayPress}
            activeOpacity={0.7}
        >
          <Text style={activeTab === 'today' ? styles.activeText : styles.text}>Today</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={styles.button}
            onPress={onHomePress}
            activeOpacity={0.7}
        >
          <Text style={activeTab === 'home' ? styles.activeText : styles.text}>Descubra</Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={styles.button}
            onPress={onProfilePress}
            activeOpacity={0.7}
        >
          <Text style={activeTab === 'profile' ? styles.activeText : styles.text}>Perfil</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
  text: {
    color: colors.subText,
    fontSize: 16,
  },
  activeText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
