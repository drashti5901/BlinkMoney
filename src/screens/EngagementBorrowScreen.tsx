import React from 'react';
import { View, ScrollView } from 'react-native';
import { CreditLineState, StreakState } from '../types';
import { DailyStreakBanner } from '../components/DailyStreakBanner';
import { CreditLineCard } from '../components/CreditLineCard';
import { styles } from './EngagementBorrowScreen.styles';

interface Props {
  creditLine: CreditLineState;
  streak: StreakState;
  interestDiscountPercent: number;
  onClaimDailyStreak: () => void;
  onOpenFlashBorrow: (amount: number) => void;
}

export const EngagementBorrowScreen: React.FC<Props> = ({
  creditLine,
  streak,
  interestDiscountPercent,
  onClaimDailyStreak,
  onOpenFlashBorrow,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Daily Stash Streak Banner (Drives Daily Retention & Engagement) */}
        <DailyStreakBanner streak={streak} onClaimDaily={onClaimDailyStreak} />

        {/* Instant Credit Line Card (85% LTV) */}
        <CreditLineCard
          creditLine={creditLine}
          interestDiscountPercent={interestDiscountPercent}
          onOpenFlashBorrow={onOpenFlashBorrow}
        />
      </ScrollView>
    </View>
  );
};
