import React from 'react';
import { View, ScrollView } from 'react-native';
import { GoldVaultState } from '../types';
import { GoldStackVisualizer } from '../components/GoldStackVisualizer';
import { styles } from './SaveScreen.styles';

interface Props {
  vault: GoldVaultState;
  onQuickStash: (amountGrams: number) => void;
  onToggleRoundup: () => void;
}

export const SaveScreen: React.FC<Props> = ({ vault, onQuickStash, onToggleRoundup }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <GoldStackVisualizer
          vault={vault}
          onQuickStash={onQuickStash}
          onToggleRoundup={onToggleRoundup}
        />
      </ScrollView>
    </View>
  );
};
