# BlinkMoney – Gamified Gold Forge & Squad Vaults 🚀

[![Branch: feat/UI](https://img.shields.io/badge/git%20branch-feat%2FUI-brightgreen.svg)](https://github.com/your-repo/BlinkMoney)
[![TypeScript: Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-blue.svg)](https://www.typescriptlang.org/)
[![React Native: 0.87](https://img.shields.io/badge/React%20Native-0.87-black.svg)](https://reactnative.dev/)
[![Safe Area: Supported](https://img.shields.io/badge/Safe%20Area-Context%20v5-emerald.svg)](https://github.com/th3rdwave/react-native-safe-area-context)

An end-to-end React Native experience built for **BlinkMoney** that unifies 24K Digital Gold micro-savings with instant gold-backed cash credit lines.

This implementation turns BlinkMoney's financial loop into a gamified, viral, high-retention experience focused on **Lead Magnet acquisition**, **Daily Engagement**, and **Co-Op Referral virality** while matching the official Play Store visual design language.

---

## 📱 Official Play Store Visual Alignment & Navigation

The application matches BlinkMoney's official Play Store Android app screenshots in color palette, typography, top header, and **4-Tab Bottom Navigation Bar**:

- **Pitch Black Background (`#070907`)**: Deep dark background.
- **Electric Lime Brand Accent (`#86EF46`)**: Signature vibrant neon green used for active tab pills, primary action buttons, user avatar circles (`DG`), and active metrics.
- **Dark Obsidian Cards (`#121712`)**: Dark charcoal card containers with contrast borders (`#202D20`).
- **Official Top Header ([`OfficialHeader.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/components/OfficialHeader.tsx))**: Avatar circle (`DG`), `Hello Drashti / Welcome!`, and `💬 Help` pill button.

```
┌────────────────────────────────────────────────────────────┐
│ [ 🏠 Home  │  🪙 Save  │  ₹ Borrow  │  🎁 Rewards ]       │
└────────────────────────────────────────────────────────────┘
```

---

## 🎯 The 3 Core Business Growth Engines

### 🧲 1. Lead Magnet (Sign-Up & Vault Activation Hook)
> **Goal**: Gets someone to install or sign up who otherwise wouldn't.

- **Free 20mg 24K Gold Welcome Gift Banner**: Features a prominent sign-up hook (`"⚡ Claim 20mg Starter Gold & Activate Vault"`) that grants new users instant free gold to activate their vault with 0 paperwork.
- **Instant Cash Credit Power Preview**: Interactive SIP Growth Calculator demonstrating how saving even ₹100 daily instantly unlocks an **85% Loan-to-Value (LTV) cash credit line** in their bank account.
- **Files**: [`HomeScreen.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/screens/HomeScreen.tsx), [`LeadSaveScreen.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/screens/LeadSaveScreen.tsx).

---

### 🔥 2. Engagement (Daily Retention & Action Engine)
> **Goal**: Gets users to come back and act, not just open.

- **7-Day Stash Streak Timeline**: Daily check-in timeline awarding free 24K gold milligram bonuses (`Day 5 = +35mg 24K Gold`) directly into the user's vault with 1-tap claim micro-interactions.
- **3D Animated Gold Ingot Density Stack**: Visual 24K gold bars that grow dynamically as users stash gold or claim streak rewards.
- **Auto-Stash Roundup Micro-Savings**: One-tap toggle for automated transaction roundups (`₹15 roundup`) on daily UPI spending.
- **Files**: [`DailyStreakBanner.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/components/DailyStreakBanner.tsx), [`GoldStackVisualizer.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/components/GoldStackVisualizer.tsx), [`SaveScreen.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/screens/SaveScreen.tsx).

---

### 👥 3. Referral & Virality (Blink Squad Co-Op & Social Sharing)
> **Goal**: Makes a user pull another user in.

- **Official Referral Card**: Matches Play Store Screenshot 1 featuring Gift Icon in `#86EF46` green circle, referral code `AXYR`, `Share invite` button, and AMFI/ISO 27001 certification notice.
- **Blink Squad Vault Co-Op Team**: 4-person squad (*Drashti*, *Priya*, *Rohan*, *Vikram*). As squad members pool gold together (`52.45g`), **EVERY member unlocks +1.70% APY bonus yield and -0.40% interest discount** on cash borrowing.
- **Viral Social Flex Card Generator**: Branded social share generator ("I unlocked ₹25k Credit Line!") displaying squad code `AXYR` with 1-tap WhatsApp and Twitter sharing.
- **Files**: [`SquadVaultCard.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/components/SquadVaultCard.tsx), [`ViralShareModal.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/modals/ViralShareModal.tsx), [`RewardsScreen.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/screens/RewardsScreen.tsx).

---

## ⚡ Instant Flash Borrow Credit Engine

- **Real-Time 85% LTV Calculator**: Dynamically calculates unlocked borrowing limits (`₹94,327` unlocked against gold collateral).
- **Interactive Borrow Preset Picker**: Select `₹15k`, `₹30k`, `₹50k`, or `MAX` to recalculate monthly APR (`0.39%/mo`) and daily interest in real time.
- **Flash Disbursement Modal**: Select target bank account (HDFC, ICICI, SBI), repayment tenure (1m, 3m, 6m), view collateral hold status, and disburse with celebratory success feedback.
- **Files**: [`CreditLineCard.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/components/CreditLineCard.tsx), [`FlashBorrowModal.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/modals/FlashBorrowModal.tsx), [`BorrowScreen.tsx`](file:///Users/avengers/Documents/BlinkMoney/src/screens/BorrowScreen.tsx).

---

## 🛠️ Engineering Critical Thinking & Edge Cases

The app includes a sticky bottom **Edge Case Simulator** toolbar allowing evaluators to switch app states live on device:

```
┌────────────────────────────────────────────────────────────┐
│ ⚙️ STATE SIMULATOR: [Normal] [Empty] [Crash] [KYC] [Offline] │
└────────────────────────────────────────────────────────────┘
```

1. 🟢 **Normal Mode**: Fully active interactive app.
2. 🐣 **Empty Vault Onboarding**: First-time user onboarding view with starter gold claim.
3. ⏳ **Loading Shimmer**: Shimmering placeholder during market rate sync.
4. 🚨 **Market Drop Alert (-12.4%)**: Simulated market crash alert; freezes new borrowing and engages margin call protection without forced liquidation.
5. 📑 **KYC Expiry State**: Blocks borrowing above ₹1,00,000 with inline DigiLocker re-verification prompt.
6. 📡 **Offline Network State**: Displays offline reception alert banner with optimistic UI queueing.
7. 📋 **Edge Cases Spec Catalog**: Dedicated modal presenting 6 critical fintech edge cases and production resolutions.

---

## 📂 Codebase Architecture & Standards

- **State Management**: Extracted into a custom React hook ([`useBlinkVault.ts`](file:///Users/avengers/Documents/BlinkMoney/src/hooks/useBlinkVault.ts)).
- **100% Component & Style Separation**: Every UI element is split into `.tsx` (JSX presentation) and `.styles.ts` (StyleSheet definitions).
- **Safe Area Insets**: Handled via `react-native-safe-area-context`'s `SafeAreaView` (`edges={['top', 'left', 'right', 'bottom']}`) and `useSafeAreaInsets()`.
- **TypeScript Type Safety**: 100% strict type safety (`npx tsc --noEmit` = **0 errors**).

---

## 💻 Local Setup & Execution Instructions

```bash
# 1. Clone & checkout branch
git checkout feat/UI

# 2. Install dependencies
yarn install

# 3. Type check (0 errors)
npx tsc --noEmit

# 4. Launch on Android Emulator
yarn android

# Alternatively start Metro packager
npx react-native start
```
