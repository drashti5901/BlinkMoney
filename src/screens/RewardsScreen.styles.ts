import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },

  // Referral Card (Screenshot 1)
  referralCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    alignItems: 'center',
  },
  giftCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.limePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  giftEmoji: {
    fontSize: 26,
  },
  refTitle: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  refSub: {
    color: COLORS.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.sm,
  },
  codeBox: {
    width: '100%',
    backgroundColor: '#070907',
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  codeLabel: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 2,
  },
  codeVal: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
  },
  shareBtn: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.limePrimary,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  shareBtnText: {
    color: COLORS.textDark,
    fontSize: 15,
    fontWeight: '800',
  },

  // Certifications notice
  certNoticeContainer: {
    alignItems: 'center',
    marginVertical: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
  certHeading: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  certSub: {
    color: COLORS.textMuted,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
  },
  certSub2: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginTop: 4,
  },
  flagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 4,
  },
  flagText: {
    color: COLORS.textPrimary,
    fontSize: 11,
    fontWeight: '700',
  },
});
