import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StreakState } from '../types';
import { styles } from './DailyStreakBanner.styles';

interface Props {
  streak: StreakState;
  onClaimDaily: () => void;
}

export const DailyStreakBanner: React.FC<Props> = ({ streak, onClaimDaily }) => {
  const todayItem = streak.days.find((d) => d.isToday);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.titleLeft}>
            <Text style={styles.fireEmoji}>🔥</Text>
            <View>
              <Text style={styles.streakTitle}>{streak.currentStreakDays} DAY STASH STREAK</Text>
              <Text style={styles.streakSub}>Total Earned: +{streak.totalMgEarned}mg 24K Gold</Text>
            </View>
          </View>

          {todayItem && !todayItem.claimed ? (
            <TouchableOpacity style={styles.claimBtn} onPress={onClaimDaily} activeOpacity={0.85}>
              <Text style={styles.claimBtnText}>Claim +{todayItem.rewardMg}mg</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.claimedPill}>
              <Text style={styles.claimedText}>✓ Claimed Today</Text>
            </View>
          )}
        </View>

        {/* 7-Day Timeline */}
        <View style={styles.daysRow}>
          {streak.days.map((day) => {
            let isClaimed = day.claimed;
            let isToday = day.isToday;

            return (
              <View key={day.dayNumber} style={styles.dayCol}>
                <View style={[styles.dayCircle, isClaimed ? styles.dayItemClaimed : isToday ? styles.dayItemToday : styles.dayItemFuture]}>
                  {isClaimed ? (
                    <Text style={styles.checkMark}>✓</Text>
                  ) : (
                    <Text style={isToday ? styles.dayTextToday : styles.dayTextFuture}>+{day.rewardMg}mg</Text>
                  )}
                </View>
                <Text style={styles.dayLabel}>Day {day.dayNumber}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
