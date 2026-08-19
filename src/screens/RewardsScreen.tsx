import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SquadState, StreakState } from '../types';
import { DailyStreakBanner } from '../components/DailyStreakBanner';
import { SquadVaultCard } from '../components/SquadVaultCard';
import { styles } from './RewardsScreen.styles';

interface Props {
  squad: SquadState;
  streak: StreakState;
  onClaimDailyStreak: () => void;
  onInviteFriend: () => void;
}

export const RewardsScreen: React.FC<Props> = ({
  squad,
  streak,
  onClaimDailyStreak,
  onInviteFriend,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Official Referral Card (Screenshot 1) */}
        <View style={styles.referralCard}>
          <View style={styles.giftCircle}>
            <Text style={styles.giftEmoji}>🎁</Text>
          </View>
          <Text style={styles.refTitle}>Invite friends to BlinkMoney</Text>
          <Text style={styles.refSub}>
            Share your referral code and help them start investing or unlock credit against mutual funds & 24K Gold.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.codeLabel}>Referral code</Text>
            <Text style={styles.codeVal}>{squad.code}</Text>
          </View>

          <TouchableOpacity style={styles.shareBtn} onPress={onInviteFriend} activeOpacity={0.85}>
            <Text style={{ fontSize: 16 }}>🔗</Text>
            <Text style={styles.shareBtnText}>Share invite</Text>
          </TouchableOpacity>
        </View>

        {/* 7-Day Stash Streak Timeline (Engagement Engine) */}
        <DailyStreakBanner streak={streak} onClaimDaily={onClaimDailyStreak} />

        {/* Blink Squad Vault Co-Op Card (Referral Engine) */}
        <SquadVaultCard squad={squad} onInviteFriend={onInviteFriend} />

        {/* Certifications notice */}
        <View style={styles.certNoticeContainer}>
          <Text style={styles.certHeading}>Designed to help your savings grow regularly</Text>
          <Text style={styles.certSub}>
            AMFI registered Mutual Fund Distributor{'\n'}
            Capline ventures private limited ARN: 330047
          </Text>
          <Text style={styles.certSub2}>🔒 Certified to ISO/IEC 27001:2022</Text>
          <View style={styles.flagRow}>
            <Text style={styles.flagText}>🇮🇳 Made in India ❤️</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
