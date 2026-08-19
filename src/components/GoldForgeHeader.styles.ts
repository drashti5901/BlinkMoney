import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
    backgroundColor: COLORS.background,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  brandBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  logoSymbol: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.goldPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.goldPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  logoText: {
    fontSize: 20,
  },
  brandTitle: {
    color: COLORS.textPrimary,
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    color: COLORS.goldPrimary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  streakPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 183, 0, 0.15)',
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 2,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: 'rgba(255, 183, 0, 0.3)',
    gap: 4,
  },
  streakEmoji: {
    fontSize: 13,
  },
  streakCount: {
    color: COLORS.goldPrimary,
    fontWeight: '700',
    fontSize: 12,
  },
  specBtn: {
    backgroundColor: COLORS.cardBgLight,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 2,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  specBtnText: {
    color: COLORS.textSecondary,
    fontWeight: '600',
    fontSize: 11,
  },
  tickerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm + 2,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  tickerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.emerald,
  },
  tickerLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  tickerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  priceText: {
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: 14,
  },
  changeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
  },
  changeText: {
    fontWeight: '700',
    fontSize: 11,
  },
});
