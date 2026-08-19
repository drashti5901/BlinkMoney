import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SquadState } from '../types';
import { SquadVaultCard } from '../components/SquadVaultCard';
import { styles } from './ReferralSquadScreen.styles';

interface Props {
  squad: SquadState;
  onInviteFriend: () => void;
}

export const ReferralSquadScreen: React.FC<Props> = ({ squad, onInviteFriend }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Official Play Store Referral Card (Screenshot 1) */}
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

        {/* Blink Squad Vault Co-Op Card (Drives Referral & Retention) */}
        <SquadVaultCard squad={squad} onInviteFriend={onInviteFriend} />

        {/* Certifications Notice */}
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
