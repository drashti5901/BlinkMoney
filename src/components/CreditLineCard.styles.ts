import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
    shadowColor: COLORS.violet,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  badgeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  creditIcon: {
    fontSize: 14,
  },
  cardTitle: {
    color: COLORS.violet,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  ltvPill: {
    backgroundColor: COLORS.violetGlow,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.4)',
  },
  ltvText: {
    color: COLORS.violet,
    fontSize: 11,
    fontWeight: '700',
  },
  limitSection: {
    marginVertical: SPACING.xs,
  },
  limitLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  limitValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  limitValue: {
    color: COLORS.textPrimary,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  limitSub: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  selectorSection: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  selectorLabel: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 6,
  },
  presetRow: {
    flexDirection: 'row',
    gap: 8,
  },
  presetChip: {
    flex: 1,
    backgroundColor: COLORS.cardBgLight,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  presetSelected: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderColor: COLORS.violet,
  },
  presetText: {
    color: COLORS.textSecondary,
    fontWeight: '700',
    fontSize: 13,
  },
  presetTextSelected: {
    color: COLORS.textPrimary,
  },
  costBox: {
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginVertical: SPACING.sm,
    gap: 6,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  rateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  strikeRate: {
    color: COLORS.textMuted,
    fontSize: 11,
    textDecorationLine: 'line-through',
  },
  costValueGreen: {
    color: COLORS.emerald,
    fontSize: 13,
    fontWeight: '800',
  },
  costValue: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
  costValueHighlight: {
    color: COLORS.goldPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  borrowBtn: {
    backgroundColor: COLORS.violet,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.xs,
  },
  borrowBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
  borrowSubText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },
});
