export type ActiveTab = 'HOME' | 'SAVE' | 'BORROW' | 'REWARDS';

export interface GoldVaultState {
  totalGoldGrams: number;
  currentGoldPricePerGram: number; // e.g. 7450
  gold24hChangePercent: number; // e.g. +1.45
  accumulatedYield: number; // yield earned in INR
  currentApy: number; // base APY + squad bonus, e.g. 11.2%
  microSavingsAutoStash: boolean;
  roundupAmount: number;
}

export interface CreditLineState {
  maxApprovedLimit: number; // e.g. 300000
  unlockedLimit: number; // 85% of total gold value
  borrowedAmount: number;
  monthlyInterestRatePercent: number; // e.g. 0.79%
  ltvRatioPercent: number; // e.g. 85%
  isMarginCallActive: boolean;
}

export interface SquadMember {
  id: string;
  name: string;
  avatar: string;
  goldGrams: number;
  joinedDate: string;
  isOwner?: boolean;
}

export interface SquadState {
  id: string;
  name: string;
  code: string;
  members: SquadMember[];
  totalSquadGoldGrams: number;
  bonusApyUnlocked: number; // e.g. +1.7%
  interestDiscountPercent: number; // e.g. -0.4%
  nextTierTargetGrams: number;
}

export interface StreakDay {
  dayNumber: number;
  rewardMg: number;
  claimed: boolean;
  isToday: boolean;
}

export interface StreakState {
  currentStreakDays: number;
  totalMgEarned: number;
  days: StreakDay[];
  isClaimableToday: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SipCalculatorState {
  dailyAmount: number; // e.g. 100
  tenureYears: number; // 1, 5, 10
  frequency: 'DAILY' | 'MONTHLY';
  projectedReturn: number;
}

export type AppSimulatedState = 
  | 'NORMAL'
  | 'EMPTY_VAULT'
  | 'LOADING_SHIMMER'
  | 'MARKET_CRASH_ALERT'
  | 'KYC_EXPIRED'
  | 'NETWORK_OFFLINE';
