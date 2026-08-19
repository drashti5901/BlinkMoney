import { useState, useRef } from 'react';
import { Animated } from 'react-native';
import {
  ActiveTab,
  GoldVaultState,
  CreditLineState,
  SquadState,
  StreakState,
  AppSimulatedState,
} from '../types';
import {
  INITIAL_GOLD_VAULT,
  INITIAL_CREDIT_LINE,
  INITIAL_SQUAD,
  INITIAL_STREAK,
} from '../data/mockData';

export const useBlinkVault = () => {
  // Navigation active tab (HOME, SAVE, BORROW, REWARDS)
  const [activeTab, setActiveTab] = useState<ActiveTab>('HOME');

  // State management
  const [vault, setVault] = useState<GoldVaultState>(INITIAL_GOLD_VAULT);
  const [creditLine, setCreditLine] = useState<CreditLineState>(INITIAL_CREDIT_LINE);
  const [squad, setSquad] = useState<SquadState>(INITIAL_SQUAD);
  const [streak, setStreak] = useState<StreakState>(INITIAL_STREAK);

  // Interactive SIP Calculator state
  const [sipDailyAmount, setSipDailyAmount] = useState<number>(100);
  const [sipTenureYears, setSipTenureYears] = useState<number>(1);
  const [sipFrequency, setSipFrequency] = useState<'DAILY' | 'MONTHLY'>('DAILY');

  // Dev Edge Case Simulator mode
  const [simState, setSimState] = useState<AppSimulatedState>('NORMAL');

  // Modals state
  const [flashBorrowVisible, setFlashBorrowVisible] = useState<boolean>(false);
  const [viralShareVisible, setViralShareVisible] = useState<boolean>(false);
  const [edgeCasesDocVisible, setEdgeCasesDocVisible] = useState<boolean>(false);
  const [selectedBorrowAmount, setSelectedBorrowAmount] = useState<number>(30000);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastAnim = useRef(new Animated.Value(-80)).current;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    Animated.sequence([
      Animated.timing(toastAnim, { toValue: 20, duration: 250, useNativeDriver: true }),
      Animated.delay(2600),
      Animated.timing(toastAnim, { toValue: -80, duration: 250, useNativeDriver: true }),
    ]).start(() => setToastMessage(null));
  };

  // Handler 1: Quick Stash Gold
  const handleQuickStash = (addedGrams: number) => {
    const newGrams = Number((vault.totalGoldGrams + addedGrams).toFixed(4));
    const newGoldValue = newGrams * vault.currentGoldPricePerGram;
    const newUnlocked = Math.round(newGoldValue * 0.85);
    const addedCredit = newUnlocked - creditLine.unlockedLimit;

    setVault((prev) => ({
      ...prev,
      totalGoldGrams: newGrams,
      accumulatedYield: prev.accumulatedYield + Math.round(addedGrams * 240),
    }));

    setCreditLine((prev) => ({
      ...prev,
      unlockedLimit: newUnlocked,
    }));

    setSquad((prev) => ({
      ...prev,
      totalSquadGoldGrams: prev.totalSquadGoldGrams + addedGrams,
    }));

    showToast(
      `🎉 Stashed +${addedGrams}g 24K Gold! Credit line expanded by +₹${addedCredit.toLocaleString(
        'en-IN'
      )}`
    );
  };

  // Handler 2: Toggle Auto-roundup
  const handleToggleRoundup = () => {
    setVault((prev) => {
      const nextState = !prev.microSavingsAutoStash;
      showToast(
        nextState
          ? '⚡ Auto-Stash Roundup Activated! (₹15 added per transaction)'
          : 'Auto-Stash Roundup Paused'
      );
      return { ...prev, microSavingsAutoStash: nextState };
    });
  };

  // Handler 3: Toggle Gold Rate Fluctuation (24h Price change toggle)
  const handleToggleGoldPrice = () => {
    setVault((prev) => {
      const isUp = prev.gold24hChangePercent > 0;
      const nextPercent = isUp ? -1.45 : 1.68;
      const priceShift = isUp ? 7390.0 : 7485.5;
      showToast(
        isUp
          ? '📉 Gold Rate Ticker: Market corrected to ₹7,390/g'
          : '📈 Gold Rate Ticker: Live Rally at ₹7,485.5/g'
      );
      return {
        ...prev,
        gold24hChangePercent: nextPercent,
        currentGoldPricePerGram: priceShift,
      };
    });
  };

  // Handler 4: Claim Daily Streak Reward
  const handleClaimDailyStreak = () => {
    const today = streak.days.find((d) => d.isToday);
    if (!today || today.claimed) return;

    const rewardGrams = today.rewardMg / 1000;
    const newGrams = Number((vault.totalGoldGrams + rewardGrams).toFixed(4));
    const newUnlocked = Math.round(newGrams * vault.currentGoldPricePerGram * 0.85);

    setStreak((prev) => ({
      ...prev,
      totalMgEarned: prev.totalMgEarned + today.rewardMg,
      days: prev.days.map((d) => (d.isToday ? { ...d, claimed: true } : d)),
    }));

    setVault((prev) => ({
      ...prev,
      totalGoldGrams: newGrams,
    }));

    setCreditLine((prev) => ({
      ...prev,
      unlockedLimit: newUnlocked,
    }));

    showToast(`🔥 Streak Claimed! +${today.rewardMg}mg 24K Gold added to your Vault!`);
  };

  // Handler 5: Open Flash Borrow
  const handleOpenFlashBorrow = (amount: number) => {
    if (simState === 'KYC_EXPIRED') {
      showToast('⚠️ Action Blocked: DigiLocker KYC re-verification required!');
      return;
    }
    if (simState === 'NETWORK_OFFLINE') {
      showToast('📡 You are offline. Transaction queued for sync.');
      return;
    }
    setSelectedBorrowAmount(amount);
    setFlashBorrowVisible(true);
  };

  // Handler 6: Confirm Flash Borrow
  const handleConfirmBorrow = (amount: number) => {
    setCreditLine((prev) => ({
      ...prev,
      borrowedAmount: prev.borrowedAmount + amount,
      unlockedLimit: Math.max(0, prev.unlockedLimit - amount),
    }));
    showToast(`⚡ ₹${amount.toLocaleString('en-IN')} Cash transferred to Bank!`);
  };

  // Handler 7: Invite Friend to Squad
  const handleInviteFriend = () => {
    setViralShareVisible(true);
  };

  return {
    activeTab,
    setActiveTab,
    vault,
    creditLine,
    squad,
    streak,
    sipDailyAmount,
    setSipDailyAmount,
    sipTenureYears,
    setSipTenureYears,
    sipFrequency,
    setSipFrequency,
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
  };
};
