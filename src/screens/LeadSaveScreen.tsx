import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { GoldVaultState } from '../types';
import { GoldStackVisualizer } from '../components/GoldStackVisualizer';
import { styles } from './LeadSaveScreen.styles';

interface Props {
  vault: GoldVaultState;
  onQuickStash: (amountGrams: number) => void;
  onToggleRoundup: () => void;
  onClaimStarterGift: () => void;
}

export const LeadSaveScreen: React.FC<Props> = ({
  vault,
  onQuickStash,
  onToggleRoundup,
  onClaimStarterGift,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Lead Magnet Welcome Gift Banner */}
        <View style={styles.leadMagnetCard}>
          <View style={styles.leadBadgeRow}>
            <Text style={styles.leadBadgeText}>🧲 SIGN-UP LEAD MAGNET</Text>
          </View>
          <Text style={styles.leadTitle}>Free 20mg 24K Gold Gift!</Text>
          <Text style={styles.leadSub}>
            Instant welcome reward for new users. Activate your 24K Gold Vault with 0 paperwork and unlock instant cash borrowing power!
          </Text>

          <TouchableOpacity style={styles.claimGiftBtn} onPress={onClaimStarterGift} activeOpacity={0.85}>
            <Text style={styles.claimGiftText}>⚡ Claim 20mg Starter Gold & Activate Vault</Text>
          </TouchableOpacity>
        </View>

        {/* 24K Gold Vault & Ingot Density Stack */}
        <GoldStackVisualizer
          vault={vault}
          onQuickStash={onQuickStash}
          onToggleRoundup={onToggleRoundup}
        />
      </ScrollView>
    </View>
  );
};
