import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.cardBg,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    padding: SPACING.lg,
    maxHeight: '90%',
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  modalTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '800',
  },
  modalSub: {
    color: COLORS.violet,
    fontSize: 11,
    fontWeight: '600',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    color: COLORS.textSecondary,
    fontSize: 16,
    fontWeight: '700',
  },
  scrollBody: {
    marginBottom: SPACING.md,
  },
  amountBanner: {
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.violet,
    marginBottom: SPACING.md,
  },
  amountLabel: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '600',
  },
  amountValue: {
    color: COLORS.textPrimary,
    fontSize: 32,
    fontWeight: '800',
  },
  disbNotice: {
    color: COLORS.emerald,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },
  section: {
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  bankOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
    gap: 10,
  },
  bankSelected: {
    borderColor: COLORS.goldPrimary,
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  bankIcon: {
    fontSize: 18,
  },
  bankName: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  checkIcon: {
    color: COLORS.goldPrimary,
    fontWeight: '800',
  },
  tenureRow: {
    gap: 8,
  },
  tenureChip: {
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
    alignItems: 'center',
  },
  tenureSelected: {
    borderColor: COLORS.violet,
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
  },
  tenureText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  tenureTextSelected: {
    color: COLORS.textPrimary,
    fontWeight: '800',
  },
  summaryCard: {
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginVertical: SPACING.sm,
    gap: 6,
  },
  summaryTitle: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    color: COLORS.textMuted,
    fontSize: 11,
  },
  summaryValue: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
  summaryValueBold: {
    color: COLORS.emerald,
    fontSize: 13,
    fontWeight: '800',
  },
  summaryValueGold: {
    color: COLORS.goldPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  confirmBtn: {
    backgroundColor: COLORS.goldPrimary,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  confirmBtnText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '800',
  },
  successContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  successIconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.goldPrimary,
  },
  successEmoji: {
    fontSize: 36,
  },
  successTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
  successSub: {
    color: COLORS.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
  successBank: {
    color: COLORS.goldPrimary,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: SPACING.lg,
  },
  txnCard: {
    width: '100%',
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    gap: 8,
    marginBottom: SPACING.xl,
  },
  txnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txnLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  txnVal: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
  txnValGold: {
    color: COLORS.goldPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  doneBtn: {
    width: '100%',
    backgroundColor: COLORS.goldPrimary,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '800',
  },
});
