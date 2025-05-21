import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../styles/Colors';

type Props = {
  label: string;
  onPress: () => void;
  type?: 'default' | 'danger';
};

export default function ProfileOptionItem({ label, onPress, type = 'default' }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.label, type === 'danger' && { color: colors.danger }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: 16,
    color: colors.text,
  },
});
