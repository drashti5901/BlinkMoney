import React from 'react';
import { View, Text, Animated, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../theme/colors';
import { useBlinkVault } from '../hooks/useBlinkVault';

// Header & Navigation
import { OfficialHeader } from '../components/OfficialHeader';
import { BottomTabBar } from '../components/BottomTabBar';

// Official Screens
import { HomeScreen } from '../screens/HomeScreen';
import { SaveScreen } from '../screens/SaveScreen';
import { BorrowScreen } from '../screens/BorrowScreen';
import { RewardsScreen } from '../screens/RewardsScreen';

// Dev Toolbar & Modals
import { EdgeCaseSimulator } from '../components/EdgeCaseSimulator';
import { FlashBorrowModal } from '../modals/FlashBorrowModal';
import { ViralShareModal } from '../modals/ViralShareModal';
import { EdgeCasesDocModal } from '../modals/EdgeCasesDocModal';

import { styles } from './AppNavigator.styles';

export const AppNavigator: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
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
    handleClaimDailyStreak,
    handleOpenFlashBorrow,
    handleConfirmBorrow,
    handleInviteFriend,
  } = useBlinkVault();

  // Render active tab screen
  const renderScreen = () => {
    if (simState === 'LOADING_SHIMMER') {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.limePrimary} />
          <Text style={styles.loadingText}>Syncing BlinkMoney Vault & Rates...</Text>
        </View>
      );
    }

    switch (activeTab) {
      case 'HOME':
        return (
          <HomeScreen
            onNavigateTab={(t) => setActiveTab(t)}
            onClaimStarterGift={() => handleQuickStash(0.02)}
          />
        );
      case 'SAVE':
        return (
          <SaveScreen
            vault={vault}
            onQuickStash={handleQuickStash}
            onToggleRoundup={handleToggleRoundup}
          />
        );
      case 'BORROW':
        return (
          <BorrowScreen
            creditLine={creditLine}
            interestDiscountPercent={squad.interestDiscountPercent}
            onOpenFlashBorrow={handleOpenFlashBorrow}
          />
        );
      case 'REWARDS':
        return (
          <RewardsScreen
            squad={squad}
            streak={streak}
            onClaimDailyStreak={handleClaimDailyStreak}
            onInviteFriend={handleInviteFriend}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigateTab={(t) => setActiveTab(t)}
            onClaimStarterGift={() => handleQuickStash(0.02)}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
      {/* Toast Alert Banner */}
      {toastMessage && (
        <Animated.View style={[styles.toastContainer, { transform: [{ translateY: toastAnim }] }]}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}

      {/* Official Top Header */}
      <OfficialHeader
        userName="Drashti"
        onOpenHelp={() => showToast('💬 Support Chat connected')}
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
          <Text style={styles.crashSub}>LTV Safety Guard active. Margin protection buffer engaged.</Text>
        </View>
      )}

      {/* KYC Expiry Warning Banner */}
      {simState === 'KYC_EXPIRED' && (
        <View style={styles.kycBanner}>
          <Text style={styles.kycTitle}>📑 KYC UPDATE REQUIRED</Text>
          <Text style={styles.kycSub}>Re-verify Video-KYC to unlock borrowing limits above ₹1,00,000.</Text>
        </View>
      )}

      {/* Active Screen Body */}
      <View style={styles.screenContainer}>{renderScreen()}</View>

      {/* Floating Edge Case State Simulator Control Bar */}
      <EdgeCaseSimulator currentSimState={simState} onSelectSimState={(state) => setSimState(state)} />

      {/* Official Bottom Tab Navigation Bar */}
      <BottomTabBar activeTab={activeTab} onSelectTab={(t) => setActiveTab(t)} />

      {/* Overlays & Modals */}
      <FlashBorrowModal
        visible={flashBorrowVisible}
        borrowAmount={selectedBorrowAmount}
        monthlyRatePercent={Math.max(0.39, creditLine.monthlyInterestRatePercent - squad.interestDiscountPercent)}
        onClose={() => setFlashBorrowVisible(false)}
        onConfirmBorrow={handleConfirmBorrow}
      />

      <ViralShareModal
        visible={viralShareVisible}
        squadCode={squad.code}
        unlockedLimit={creditLine.unlockedLimit}
        onClose={() => setViralShareVisible(false)}
      />

      <EdgeCasesDocModal visible={edgeCasesDocVisible} onClose={() => setEdgeCasesDocVisible(false)} />
    </SafeAreaView>
  );
};
