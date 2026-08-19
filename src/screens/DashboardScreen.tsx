import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, SPACING } from '../theme/colors';
import { useBlinkVault } from '../hooks/useBlinkVault';

// Custom UI Components
import { GoldForgeHeader } from '../components/GoldForgeHeader';
import { GoldStackVisualizer } from '../components/GoldStackVisualizer';
import { CreditLineCard } from '../components/CreditLineCard';
import { SquadVaultCard } from '../components/SquadVaultCard';
import { DailyStreakBanner } from '../components/DailyStreakBanner';
import { EdgeCaseSimulator } from '../components/EdgeCaseSimulator';

// Modals
import { FlashBorrowModal } from '../modals/FlashBorrowModal';
import { ViralShareModal } from '../modals/ViralShareModal';
import { EdgeCasesDocModal } from '../modals/EdgeCasesDocModal';

import { styles } from './DashboardScreen.styles';

export const DashboardScreen: React.FC = () => {
  const {
    vault,
    creditLine,
    squad,
    streak,
    simState,
    setSimState,
    flashBorrowVisible,
    setFlashBorrowVisible,
    viralShareVisible,
    setViralShareVisible,
    edgeCasesDocVisible,
    setEdgeCasesDocVisible,
    selectedBorrowAmount,
    toastMessage,
    toastAnim,
    showToast,
    handleQuickStash,
    handleToggleRoundup,
    handleToggleGoldPrice,
    handleClaimDailyStreak,
    handleOpenFlashBorrow,
    handleConfirmBorrow,
    handleInviteFriend,
  } = useBlinkVault();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
      {/* Animated Toast Banner */}
      {toastMessage && (
        <Animated.View
          style={[styles.toastContainer, { transform: [{ translateY: toastAnim }] }]}
        >
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}

      {/* Main Header */}
      <GoldForgeHeader
        goldPrice={vault.currentGoldPricePerGram}
        priceChangePercent={vault.gold24hChangePercent}
        onToggleGoldPrice={handleToggleGoldPrice}
        streakDays={streak.currentStreakDays}
        onOpenStreak={() => showToast(`🔥 ${streak.currentStreakDays} Day Streak Active!`)}
        onOpenEdgeCases={() => setEdgeCasesDocVisible(true)}
      />

      {/* Network Offline Alert Banner */}
      {simState === 'NETWORK_OFFLINE' && (
        <View style={styles.offlineBanner}>
          <Text style={styles.offlineText}>📡 OFFLINE MODE: Cached data active. Syncing changes...</Text>
        </View>
      )}

      {/* Market Crash Safety Banner */}
      {simState === 'MARKET_CRASH_ALERT' && (
        <View style={styles.crashBanner}>
          <Text style={styles.crashTitle}>🚨 MARKET VOLATILITY ALERT (-12.4% Drop)</Text>
          <Text style={styles.crashSub}>
            LTV Safety Guard active. Margin protection buffer engaged.
          </Text>
        </View>
      )}

      {/* KYC Expiry Warning Banner */}
      {simState === 'KYC_EXPIRED' && (
        <View style={styles.kycBanner}>
          <Text style={styles.kycTitle}>📑 KYC UPDATE REQUIRED</Text>
          <Text style={styles.kycSub}>
            Re-verify Video-KYC to unlock borrowing limits above ₹1,00,000.
          </Text>
        </View>
      )}

      {/* Loading Skeleton Mode */}
      {simState === 'LOADING_SHIMMER' ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.goldPrimary} />
          <Text style={styles.loadingText}>Syncing 24K Gold Rates & Collateral Engine...</Text>
        </View>
      ) : simState === 'EMPTY_VAULT' ? (
        /* Empty Vault Onboarding View */
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.emptyContainer}>
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>🎁</Text>
            <Text style={styles.emptyTitle}>Welcome to Blink Gold Forge!</Text>
            <Text style={styles.emptySub}>
              Start saving in 24K Digital Gold from just ₹10. As your gold grows, instantly unlock cash credit at 0.79%/mo interest!
            </Text>
            <TouchableOpacity
              style={styles.starterBtn}
              onPress={() => {
                setSimState('NORMAL');
                handleQuickStash(1.0);
              }}
            >
              <Text style={styles.starterBtnText}>⚡ Claim Starter 20mg Gold & Activate</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        /* Normal Interactive Dashboard Flow */
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Daily Streak Tracker Banner */}
          <DailyStreakBanner streak={streak} onClaimDaily={handleClaimDailyStreak} />

          {/* Core Gold Stack Visualizer (Save & Grow) */}
          <GoldStackVisualizer
            vault={vault}
            onQuickStash={handleQuickStash}
            onToggleRoundup={handleToggleRoundup}
          />

          {/* Instant Credit Line Card (Borrow) */}
          <CreditLineCard
            creditLine={creditLine}
            onOpenFlashBorrow={handleOpenFlashBorrow}
            interestDiscountPercent={squad.interestDiscountPercent}
          />

          {/* Squad Vault Card (Referral & Virality) */}
          <SquadVaultCard squad={squad} onInviteFriend={handleInviteFriend} />

          <View style={{ height: SPACING.xl }} />
        </ScrollView>
      )}

      {/* Floating Edge Case State Simulator Control Bar */}
      <EdgeCaseSimulator
        currentSimState={simState}
        onSelectSimState={(state) => setSimState(state)}
      />

      {/* Modals */}
      <FlashBorrowModal
        visible={flashBorrowVisible}
        borrowAmount={selectedBorrowAmount}
        monthlyRatePercent={Math.max(
          0.39,
          creditLine.monthlyInterestRatePercent - squad.interestDiscountPercent
        )}
        onClose={() => setFlashBorrowVisible(false)}
        onConfirmBorrow={handleConfirmBorrow}
      />

      <ViralShareModal
        visible={viralShareVisible}
        squadCode={squad.code}
        unlockedLimit={creditLine.unlockedLimit}
        onClose={() => setViralShareVisible(false)}
      />

      <EdgeCasesDocModal
        visible={edgeCasesDocVisible}
        onClose={() => setEdgeCasesDocVisible(false)}
      />
    </SafeAreaView>
  );
};
