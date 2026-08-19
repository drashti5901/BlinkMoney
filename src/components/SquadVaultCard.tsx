import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SquadState } from '../types';
import { styles } from './SquadVaultCard.styles';

interface Props {
  squad: SquadState;
  onInviteFriend: () => void;
}

export const SquadVaultCard: React.FC<Props> = ({ squad, onInviteFriend }) => {
  const currentGrams = squad.totalSquadGoldGrams;
  const targetGrams = squad.nextTierTargetGrams;
  const progressPercent = Math.min(100, Math.round((currentGrams / targetGrams) * 100));

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header Bar */}
        <View style={styles.headerRow}>
          <View style={styles.tagLeft}>
            <Text style={styles.squadIcon}>👥</Text>
            <Text style={styles.squadTitle}>BLINK GOLD SQUAD</Text>
          </View>

          <View style={styles.boostPill}>
            <Text style={styles.boostText}>⚡ +{squad.bonusApyUnlocked}% APY BOOST</Text>
          </View>
        </View>

        <View style={styles.squadMetaRow}>
          <View>
            <Text style={styles.squadName}>{squad.name}</Text>
            <Text style={styles.squadCode}>Code: {squad.code}</Text>
          </View>

          <View style={styles.goldPoolBadge}>
            <Text style={styles.goldPoolLabel}>Pool Gold</Text>
            <Text style={styles.goldPoolValue}>{squad.totalSquadGoldGrams.toFixed(2)}g</Text>
          </View>
        </View>

        {/* Squad Members Avatars Row */}
        <View style={styles.membersContainer}>
          <Text style={styles.membersTitle}>Squad Team ({squad.members.length}/4 Members Active)</Text>
          <View style={styles.avatarRow}>
            {squad.members.map((member) => (
              <View key={member.id} style={styles.avatarChip}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{member.avatar}</Text>
                  {member.isOwner && <Text style={styles.crown}>👑</Text>}
                </View>
                <Text style={styles.memberName} numberOfLines={1}>
                  {member.name.split(' ')[0]}
                </Text>
                <Text style={styles.memberGold}>{member.goldGrams.toFixed(1)}g</Text>
              </View>
            ))}

            {squad.members.length < 4 && (
              <TouchableOpacity
                style={styles.addMemberChip}
                onPress={onInviteFriend}
                activeOpacity={0.8}
              >
                <View style={styles.addCircle}>
                  <Text style={styles.addPlus}>+</Text>
                </View>
                <Text style={styles.addText}>Invite</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Tier Progress */}
        <View style={styles.tierSection}>
          <View style={styles.tierHeader}>
            <Text style={styles.tierLabel}>Next Unlock: Tier 3 (+2.5% APY & -0.6% APR)</Text>
            <Text style={styles.tierPct}>{progressPercent}%</Text>
          </View>

          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
          </View>
          <Text style={styles.progressSub}>
            {currentGrams.toFixed(1)}g / {targetGrams.toFixed(1)}g Gold Pooled
          </Text>
        </View>

        {/* Action button */}
        <TouchableOpacity style={styles.inviteBtn} onPress={onInviteFriend} activeOpacity={0.85}>
          <Text style={styles.inviteBtnText}>🎁 Invite Friend & Stack Squad APY (+0.50% Each)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
