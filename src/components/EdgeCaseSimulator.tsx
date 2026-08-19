import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SPACING } from '../theme/colors';
import { AppSimulatedState } from '../types';
import { styles } from './EdgeCaseSimulator.styles';

interface Props {
  currentSimState: AppSimulatedState;
  onSelectSimState: (state: AppSimulatedState) => void;
}

export const EdgeCaseSimulator: React.FC<Props> = ({
  currentSimState,
  onSelectSimState,
}) => {
  const insets = useSafeAreaInsets();
  const options: { id: AppSimulatedState; label: string; icon: string }[] = [
    { id: 'NORMAL', label: 'Normal Mode', icon: '🟢' },
    { id: 'EMPTY_VAULT', label: 'Empty Vault (First User)', icon: '🐣' },
    { id: 'LOADING_SHIMMER', label: 'Loading Shimmer', icon: '⏳' },
    { id: 'MARKET_CRASH_ALERT', label: 'Market Drop Alert (-12%)', icon: '🚨' },
    { id: 'KYC_EXPIRED', label: 'KYC Expiry State', icon: '📑' },
    { id: 'NETWORK_OFFLINE', label: 'Offline Network', icon: '📡' },
  ];

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, SPACING.xs + 2) }]}>
      <View style={styles.bar}>
        <Text style={styles.simTitle}>⚙️ STATE & EDGE CASE SIMULATOR:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {options.map((opt) => {
            const isActive = currentSimState === opt.id;
            return (
              <TouchableOpacity
                key={opt.id}
                style={[styles.simChip, isActive && styles.simChipActive]}
                onPress={() => onSelectSimState(opt.id)}
                activeOpacity={0.8}
              >
                <Text style={styles.chipIcon}>{opt.icon}</Text>
                <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                  {opt.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
