import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { GoldVaultState } from '../types';
import { styles } from './GoldStackVisualizer.styles';

interface Props {
  vault: GoldVaultState;
  onQuickStash: (amountGrams: number) => void;
  onToggleRoundup: () => void;
}

export const GoldStackVisualizer: React.FC<Props> = ({
  vault,
  onQuickStash,
  onToggleRoundup,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0.4)).current;

  // Total portfolio value in ₹
  const totalValueInr = Math.round(vault.totalGoldGrams * vault.currentGoldPricePerGram);

  // Trigger pulse on stash
  const handleStashPress = (grams: number) => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.06, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();

    Animated.sequence([
      Animated.timing(glowAnim, { toValue: 1, duration: 200, useNativeDriver: false }),
      Animated.timing(glowAnim, { toValue: 0.4, duration: 400, useNativeDriver: false }),
    ]).start();

    onQuickStash(grams);
  };

  // Determine number of visual ingots (1 ingot per ~3g of gold up to 6 bars)
  const barCount = Math.min(6, Math.max(1, Math.floor(vault.totalGoldGrams / 3)));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        {/* Glow overlay */}
        <Animated.View style={[styles.glowBorder, { opacity: glowAnim }]} />

        {/* Card Header */}
        <View style={styles.headerRow}>
          <View style={styles.vaultTag}>
            <Text style={styles.vaultIcon}>🏛️</Text>
            <Text style={styles.vaultTitle}>MY DIGITAL GOLD VAULT</Text>
          </View>

          <View style={styles.apyBadge}>
            <Text style={styles.apyText}>🔥 {vault.currentApy}% APY</Text>
          </View>
        </View>

        {/* Main Balance display */}
        <View style={styles.balanceSection}>
          <Text style={styles.inrAmount}>₹{totalValueInr.toLocaleString('en-IN')}</Text>
          <View style={styles.gramBadge}>
            <Text style={styles.gramText}>
              🪙 {vault.totalGoldGrams.toFixed(4)} grams (24K)
            </Text>
          </View>
        </View>

        {/* Visual Gold Ingot Stack Graphic */}
        <View style={styles.stackContainer}>
          <Text style={styles.stackLabel}>Gold Stash Density ({barCount} Ingot Bars Collateral)</Text>
          <View style={styles.ingotRow}>
            {Array.from({ length: 6 }).map((_, index) => {
              const isActive = index < barCount;
              return (
                <View
                  key={index}
                  style={[
                    styles.ingotBar,
                    isActive ? styles.ingotActive : styles.ingotInactive,
                  ]}
                >
                  <Text style={styles.ingotSymbol}>{isActive ? '🥇' : '▫️'}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Yield & Roundup Info Bar */}
        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.infoLabel}>Accumulated Yield</Text>
            <Text style={styles.infoValueGreen}>+₹{vault.accumulatedYield.toFixed(2)}</Text>
          </View>
          
          <TouchableOpacity 
            style={[styles.roundupPill, vault.microSavingsAutoStash && styles.roundupActive]}
            onPress={onToggleRoundup}
            activeOpacity={0.8}
          >
            <Text style={styles.roundupText}>
              ⚡ Auto-Stash: {vault.microSavingsAutoStash ? `₹${vault.roundupAmount} Roundup` : 'OFF'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stash Actions */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.stashBtnPrimary}
            onPress={() => handleStashPress(0.5)}
            activeOpacity={0.85}
          >
            <Text style={styles.stashBtnText}>+ Stash 0.5g (₹{Math.round(0.5 * vault.currentGoldPricePerGram)})</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.stashBtnSecondary}
            onPress={() => handleStashPress(1.0)}
            activeOpacity={0.85}
          >
            <Text style={styles.stashBtnTextSecondary}>+1.0g</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
