import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CreditLineState } from '../types';
import { styles } from './CreditLineCard.styles';

interface Props {
  creditLine: CreditLineState;
  onOpenFlashBorrow: (selectedAmount: number) => void;
  interestDiscountPercent: number; // e.g. 0.40% discount from squad
}

export const CreditLineCard: React.FC<Props> = ({
  creditLine,
  onOpenFlashBorrow,
  interestDiscountPercent,
}) => {
  // Preset select buttons
  const unlocked = creditLine.unlockedLimit;
  const presets = [15000, 30000, 50000, Math.min(75000, unlocked)].filter(
    (amt) => amt <= unlocked
  );

  const [selectedBorrowAmt, setSelectedBorrowAmt] = useState<number>(
    presets[1] || Math.round(unlocked * 0.5)
  );

  const netMonthlyRate = Math.max(
    0.39,
    creditLine.monthlyInterestRatePercent - interestDiscountPercent
  );

  const estimatedMonthlyInterest = Math.round(
    selectedBorrowAmt * (netMonthlyRate / 100)
  );
  const estimatedDailyInterest = (estimatedMonthlyInterest / 30).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header Badge */}
        <View style={styles.headerRow}>
          <View style={styles.badgeLeft}>
            <Text style={styles.creditIcon}>⚡</Text>
            <Text style={styles.cardTitle}>INSTANT GOLD CREDIT LINE</Text>
          </View>

          <View style={styles.ltvPill}>
            <Text style={styles.ltvText}>{creditLine.ltvRatioPercent}% LTV Backed</Text>
          </View>
        </View>

        {/* Unlocked Limit Display */}
        <View style={styles.limitSection}>
          <Text style={styles.limitLabel}>Unlocked Borrow Limit (0 Paperwork)</Text>
          <View style={styles.limitValueRow}>
            <Text style={styles.limitValue}>
              ₹{unlocked.toLocaleString('en-IN')}
            </Text>
            <Text style={styles.limitSub}>/ ₹{creditLine.maxApprovedLimit.toLocaleString('en-IN')} Max</Text>
          </View>
        </View>

        {/* Dynamic Amount Selector */}
        <View style={styles.selectorSection}>
          <Text style={styles.selectorLabel}>Select Cash Borrow Amount:</Text>
          <View style={styles.presetRow}>
            {presets.map((amt) => {
              const isSelected = selectedBorrowAmt === amt;
              return (
                <TouchableOpacity
                  key={amt}
                  style={[styles.presetChip, isSelected && styles.presetSelected]}
                  onPress={() => setSelectedBorrowAmt(amt)}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.presetText, isSelected && styles.presetTextSelected]}>
                    ₹{(amt / 1000).toFixed(0)}k
                  </Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              style={[
                styles.presetChip,
                selectedBorrowAmt === unlocked && styles.presetSelected,
              ]}
              onPress={() => setSelectedBorrowAmt(unlocked)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.presetText,
                  selectedBorrowAmt === unlocked && styles.presetTextSelected,
                ]}
              >
                MAX
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Transparent Cost Breakdown */}
        <View style={styles.costBox}>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Monthly APR Rate:</Text>
            <View style={styles.rateRow}>
              {interestDiscountPercent > 0 && (
                <Text style={styles.strikeRate}>
                  {creditLine.monthlyInterestRatePercent}%
                </Text>
              )}
              <Text style={styles.costValueGreen}>{netMonthlyRate.toFixed(2)}%/mo</Text>
            </View>
          </View>

          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Est. Interest Cost:</Text>
            <Text style={styles.costValue}>
              ₹{estimatedMonthlyInterest}/mo (~₹{estimatedDailyInterest}/day)
            </Text>
          </View>

          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Collateral Release:</Text>
            <Text style={styles.costValueHighlight}>Instant upon repayment</Text>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          style={styles.borrowBtn}
          onPress={() => onOpenFlashBorrow(selectedBorrowAmt)}
          activeOpacity={0.85}
        >
          <Text style={styles.borrowBtnText}>
            ⚡ Flash Borrow ₹{selectedBorrowAmt.toLocaleString('en-IN')} Now
          </Text>
          <Text style={styles.borrowSubText}>Instant Bank Transfer • 0 Processing Fee</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
