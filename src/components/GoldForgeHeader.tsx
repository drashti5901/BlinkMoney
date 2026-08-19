import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { COLORS } from '../theme/colors';
import { styles } from './GoldForgeHeader.styles';

interface Props {
  goldPrice: number;
  priceChangePercent: number;
  onToggleGoldPrice: () => void;
  streakDays: number;
  onOpenStreak: () => void;
  onOpenEdgeCases: () => void;
}

export const GoldForgeHeader: React.FC<Props> = ({
  goldPrice,
  priceChangePercent,
  onToggleGoldPrice,
  streakDays,
  onOpenStreak,
  onOpenEdgeCases,
}) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  const isPositive = priceChangePercent >= 0;

  return (
    <View style={styles.container}>
      {/* Top Brand Bar */}
      <View style={styles.topRow}>
        <View style={styles.brandBadge}>
          <View style={styles.logoSymbol}>
            <Text style={styles.logoText}>⚡</Text>
          </View>
          <View>
            <Text style={styles.brandTitle}>BlinkMoney</Text>
            <Text style={styles.brandSubtitle}>24K GOLD FORGE</Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.streakPill} onPress={onOpenStreak} activeOpacity={0.8}>
            <Text style={styles.streakEmoji}>🔥</Text>
            <Text style={styles.streakCount}>{streakDays}d Streak</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.specBtn} onPress={onOpenEdgeCases} activeOpacity={0.8}>
            <Text style={styles.specBtnText}>📋 Edge Cases</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Gold Price Ticker Bar */}
      <TouchableOpacity style={styles.tickerCard} onPress={onToggleGoldPrice} activeOpacity={0.85}>
        <View style={styles.tickerLeft}>
          <Animated.View style={[styles.liveDot, { opacity: pulseAnim }]} />
          <Text style={styles.tickerLabel}>24K 99.9% Pure Gold Rate</Text>
        </View>

        <View style={styles.tickerRight}>
          <Text style={styles.priceText}>₹{goldPrice.toLocaleString('en-IN')}/g</Text>
          <View style={[styles.changeBadge, { backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)' }]}>
            <Text style={[styles.changeText, { color: isPositive ? COLORS.emerald : COLORS.rose }]}>
              {isPositive ? '▲ +' : '▼ '}{priceChangePercent}%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
