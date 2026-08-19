import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SPACING } from '../theme/colors';
import { styles } from './FlashBorrowModal.styles';

interface Props {
  visible: boolean;
  borrowAmount: number;
  monthlyRatePercent: number;
  onClose: () => void;
  onConfirmBorrow: (amount: number, bank: string, tenureMonths: number) => void;
}

export const FlashBorrowModal: React.FC<Props> = ({
  visible,
  borrowAmount,
  monthlyRatePercent,
  onClose,
  onConfirmBorrow,
}) => {
  const insets = useSafeAreaInsets();
  const [tenureMonths, setTenureMonths] = useState<number>(3);
  const [selectedBank, setSelectedBank] = useState<string>('HDFC Bank •••• 4920');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [txnId, setTxnId] = useState<string>('');

  const banks = [
    { name: 'HDFC Bank •••• 4920', icon: '🏦' },
    { name: 'ICICI Bank •••• 8812', icon: '🏛️' },
    { name: 'State Bank of India •••• 1045', icon: '💳' },
  ];

  const tenures = [
    { months: 1, label: '1 Month' },
    { months: 3, label: '3 Months (Popular)' },
    { months: 6, label: '6 Months' },
  ];

  const totalInterestCost = Math.round(
    borrowAmount * (monthlyRatePercent / 100) * tenureMonths
  );
  const monthlyEmi = Math.round(
    (borrowAmount + totalInterestCost) / tenureMonths
  );

  const handleConfirm = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const generatedTxn = 'BLK-DISB-' + Math.floor(100000 + Math.random() * 900000);
      setTxnId(generatedTxn);
      onConfirmBorrow(borrowAmount, selectedBank, tenureMonths);
    }, 1200);
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { paddingBottom: Math.max(insets.bottom, SPACING.lg) }]}>
          {!isSuccess ? (
            <>
              {/* Header */}
              <View style={styles.modalHeader}>
                <View>
                  <Text style={styles.modalTitle}>⚡ Flash Credit Disbursement</Text>
                  <Text style={styles.modalSub}>Backed by 24K Gold Collateral</Text>
                </View>
                <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                  <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.scrollBody} showsVerticalScrollIndicator={false}>
                {/* Selected Amount Banner */}
                <View style={styles.amountBanner}>
                  <Text style={styles.amountLabel}>Disbursement Amount</Text>
                  <Text style={styles.amountValue}>
                    ₹{borrowAmount.toLocaleString('en-IN')}
                  </Text>
                  <Text style={styles.disbNotice}>⚡ 0% Processing Fee • Instant Transfer</Text>
                </View>

                {/* Bank Account Selection */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>1. Select Target Bank Account</Text>
                  {banks.map((b) => (
                    <TouchableOpacity
                      key={b.name}
                      style={[
                        styles.bankOption,
                        selectedBank === b.name && styles.bankSelected,
                      ]}
                      onPress={() => setSelectedBank(b.name)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.bankIcon}>{b.icon}</Text>
                      <Text style={styles.bankName}>{b.name}</Text>
                      {selectedBank === b.name && <Text style={styles.checkIcon}>✓</Text>}
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Tenure Selection */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>2. Select Repayment Tenure</Text>
                  <View style={styles.tenureRow}>
                    {tenures.map((t) => (
                      <TouchableOpacity
                        key={t.months}
                        style={[
                          styles.tenureChip,
                          tenureMonths === t.months && styles.tenureSelected,
                        ]}
                        onPress={() => setTenureMonths(t.months)}
                        activeOpacity={0.8}
                      >
                        <Text
                          style={[
                            styles.tenureText,
                            tenureMonths === t.months && styles.tenureTextSelected,
                          ]}
                        >
                          {t.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                {/* Repayment Breakdown */}
                <View style={styles.summaryCard}>
                  <Text style={styles.summaryTitle}>Repayment Summary</Text>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Monthly Installment (EMI):</Text>
                    <Text style={styles.summaryValueBold}>₹{monthlyEmi.toLocaleString('en-IN')}/mo</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Total Interest ({tenureMonths} mos @ {monthlyRatePercent}%/mo):</Text>
                    <Text style={styles.summaryValue}>₹{totalInterestCost.toLocaleString('en-IN')}</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Collateral Lock:</Text>
                    <Text style={styles.summaryValueGold}>
                      {(borrowAmount / (7485.5 * 0.85)).toFixed(2)}g 24K Gold Held
                    </Text>
                  </View>
                </View>

                {/* Action button */}
                <TouchableOpacity
                  style={styles.confirmBtn}
                  onPress={handleConfirm}
                  disabled={isProcessing}
                  activeOpacity={0.85}
                >
                  {isProcessing ? (
                    <ActivityIndicator color="#000" />
                  ) : (
                    <Text style={styles.confirmBtnText}>
                      🔒 Unlock & Disburse ₹{borrowAmount.toLocaleString('en-IN')} Now
                    </Text>
                  )}
                </TouchableOpacity>
              </ScrollView>
            </>
          ) : (
            /* Success Celebration Step */
            <View style={styles.successContainer}>
              <View style={styles.successIconCircle}>
                <Text style={styles.successEmoji}>🎉</Text>
              </View>

              <Text style={styles.successTitle}>Disbursement Successful!</Text>
              <Text style={styles.successSub}>
                ₹{borrowAmount.toLocaleString('en-IN')} transferred instantly to
              </Text>
              <Text style={styles.successBank}>{selectedBank}</Text>

              <View style={styles.txnCard}>
                <View style={styles.txnRow}>
                  <Text style={styles.txnLabel}>Transaction Ref ID:</Text>
                  <Text style={styles.txnVal}>{txnId}</Text>
                </View>
                <View style={styles.txnRow}>
                  <Text style={styles.txnLabel}>Collateral Status:</Text>
                  <Text style={styles.txnValGold}>Secured in Blink Gold Vault</Text>
                </View>
                <View style={styles.txnRow}>
                  <Text style={styles.txnLabel}>First EMI Due:</Text>
                  <Text style={styles.txnVal}>18th Sept 2026</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.doneBtn} onPress={handleFinish}>
                <Text style={styles.doneBtnText}>Return to Dashboard</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
