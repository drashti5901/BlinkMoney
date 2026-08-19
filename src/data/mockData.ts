import { GoldVaultState, CreditLineState, SquadState, StreakState, FaqItem } from '../types';

export const INITIAL_GOLD_PRICE = 7485.50; // ₹ per gram 24K Gold

export const INITIAL_GOLD_VAULT: GoldVaultState = {
  totalGoldGrams: 14.8250,
  currentGoldPricePerGram: INITIAL_GOLD_PRICE,
  gold24hChangePercent: 1.68,
  accumulatedYield: 3420.75,
  currentApy: 11.2, // 9.5% base + 1.7% squad multiplier
  microSavingsAutoStash: true,
  roundupAmount: 15,
};

export const INITIAL_CREDIT_LINE: CreditLineState = {
  maxApprovedLimit: 300000,
  unlockedLimit: Math.round(14.8250 * INITIAL_GOLD_PRICE * 0.85), // ~₹94,328
  borrowedAmount: 18000,
  monthlyInterestRatePercent: 0.79,
  ltvRatioPercent: 85,
  isMarginCallActive: false,
};

export const INITIAL_SQUAD: SquadState = {
  id: 'squad-blink-99',
  name: 'Blink Gold Miners 🚀',
  code: 'AXYR', // Official referral code from Play Store screenshot
  totalSquadGoldGrams: 52.45,
  bonusApyUnlocked: 1.70,
  interestDiscountPercent: 0.40,
  nextTierTargetGrams: 75.0,
  members: [
    { id: 'u1', name: 'Drashti G. (You)', avatar: 'DG', goldGrams: 14.825, joinedDate: '2026-01-10', isOwner: true },
    { id: 'u2', name: 'Priya Sharma', avatar: 'PS', goldGrams: 18.200, joinedDate: '2026-01-14' },
    { id: 'u3', name: 'Rohan Mehta', avatar: 'RM', goldGrams: 11.425, joinedDate: '2026-02-01' },
    { id: 'u4', name: 'Vikram R.', avatar: 'VR', goldGrams: 8.000, joinedDate: '2026-02-12' },
  ],
};

export const INITIAL_STREAK: StreakState = {
  currentStreakDays: 5,
  totalMgEarned: 140,
  isClaimableToday: true,
  days: [
    { dayNumber: 1, rewardMg: 10, claimed: true, isToday: false },
    { dayNumber: 2, rewardMg: 15, claimed: true, isToday: false },
    { dayNumber: 3, rewardMg: 20, claimed: true, isToday: false },
    { dayNumber: 4, rewardMg: 25, claimed: true, isToday: false },
    { dayNumber: 5, rewardMg: 35, claimed: false, isToday: true },
    { dayNumber: 6, rewardMg: 50, claimed: false, isToday: false },
    { dayNumber: 7, rewardMg: 100, claimed: false, isToday: false },
  ],
};

export const WHY_BLINKMONEY_FEATURES = [
  { id: 'f1', icon: '📊', title: 'Low minimums', desc: 'Start your SIPs with as little as ₹21 and earn ~14% returns' },
  { id: 'f2', icon: '🔄', title: 'Hands-off investing', desc: 'We take care of research, allocation, and rebalancing for you' },
  { id: 'f3', icon: '⚖️', title: 'Fully digital', desc: 'Set up and manage everything online with zero paperwork' },
  { id: 'f4', icon: '⚡', title: 'Instant cash', desc: 'Borrow against your investments without selling them in 10 mins' },
  { id: 'f5', icon: '🤲', title: 'Low-cost borrowing', desc: 'Pay interest only, starting at 9.99% p.a.' },
  { id: 'f6', icon: '💎', title: 'Inclusive by design', desc: 'Start investing with just your PAN and a bank account' },
];

export const OFFICIAL_FAQS: FaqItem[] = [
  { id: 'faq-1', question: 'What is BlinkMoney?', answer: 'BlinkMoney is India\'s first all-in-one financial platform designed to help your savings grow automatically while unlocking low-cost credit against your investments.' },
  { id: 'faq-2', question: 'Who is eligible for BlinkMoney?', answer: 'Any Indian resident aged 18+ with a valid PAN card, Aadhaar, and bank account is instantly eligible.' },
  { id: 'faq-3', question: 'What investments are eligible?', answer: '24K Digital Gold, AMFI-registered mutual funds, and approved collateral assets.' },
  { id: 'faq-4', question: 'What documents are required to apply?', answer: '100% digital KYC! Just your PAN card and Aadhaar verification via DigiLocker. 0 physical paperwork.' },
  { id: 'faq-5', question: 'How much can I borrow?', answer: 'You can borrow up to 85% LTV of your total gold and mutual fund investment portfolio value instantly.' },
  { id: 'faq-6', question: 'What are the interest rates?', answer: 'Borrowing interest starts at just 0.79% per month (9.99% p.a.). You pay interest ONLY on the amount disbursed.' },
  { id: 'faq-7', question: 'Do I have to pay interest on the entire credit line?', answer: 'No! Interest is charged only on the exact amount you transfer to your bank, calculated daily.' },
  { id: 'faq-8', question: 'What is lien marking / pledging?', answer: 'Lien marking locks your investment collateral safely while keeping your assets growing and earning market yield.' },
  { id: 'faq-9', question: 'Can I still get returns on my pledged investments?', answer: 'Yes! You continue to earn 100% of market capital growth and interest yield even while collateral is pledged.' },
];

export const EDGE_CASES_CATALOG = [
  {
    id: 'EC-01',
    category: 'Fintech & Collateral Safety',
    title: 'Market Crash LTV Margin Call',
    description: 'Gold market price drops >12% suddenly while credit line is active.',
    resolution: 'Automatic margin safety alert; freezes new borrowing, triggers micro-stash top-up buffer without forced liquidation.',
  },
  {
    id: 'EC-02',
    category: 'Precision & Data Integrity',
    title: 'Fractional Micro-Gold Float Rounding',
    description: 'Auto-roundup micro savings of ₹15 creates 0.0020038741g gold weight.',
    resolution: 'Enforces 4-decimal currency floor string formatting (IEEE 754 float guard) to prevent truncation errors in loan underwriting.',
  },
  {
    id: 'EC-03',
    category: 'Referral & Squad Mechanics',
    title: 'Squad Member Departure & Tier Drop',
    description: 'A squad member withdraws their gold, dropping team pool below the 50g yield multiplier threshold.',
    resolution: '48-hour grace period badge before yield APY adjusts; alerts squad members to invite a replacement multiplier friend.',
  },
  {
    id: 'EC-04',
    category: 'Transaction Safety',
    title: 'Bank Disbursement Timeout / Atomic Locks',
    description: 'User taps Flash Borrow, credit collateral locks, but immediate UPI bank node times out.',
    resolution: 'Atomic lock status rollback + status banner ("Reversing collateral hold... Bank link timed out").',
  },
  {
    id: 'EC-05',
    category: 'Compliance & Verification',
    title: 'KYC Expiry & Credit Cap Breach',
    description: 'User attempts to unlock >₹1,00,000 credit line with standard Video-KYC expiring.',
    resolution: 'Inline instant DigiLocker re-verification modal retaining selected borrowing slider value.',
  },
  {
    id: 'EC-06',
    category: 'Connectivity',
    title: 'Offline Network State & Cache Sync',
    description: 'User operates app in low-reception area during daily stash claim.',
    resolution: 'Queues action in local secure cache with optimistic UI update and synchronizes upon re-connection.',
  },
];
