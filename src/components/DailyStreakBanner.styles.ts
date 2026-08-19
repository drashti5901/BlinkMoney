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
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 183, 0, 0.25)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fireEmoji: {
    fontSize: 24,
  },
  streakTitle: {
    color: COLORS.goldPrimary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  streakSub: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '500',
  },
  claimBtn: {
    backgroundColor: COLORS.goldPrimary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs + 4,
    borderRadius: RADIUS.full,
    shadowColor: COLORS.goldPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  claimBtnText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '800',
  },
  claimedPill: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs + 4,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  claimedText: {
    color: COLORS.emerald,
    fontSize: 12,
    fontWeight: '700',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },
  dayCol: {
    alignItems: 'center',
    flex: 1,
  },
  dayCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  dayItemClaimed: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderWidth: 1,
    borderColor: COLORS.emerald,
  },
  dayItemToday: {
    backgroundColor: 'rgba(255, 215, 0, 0.25)',
    borderWidth: 1.5,
    borderColor: COLORS.goldPrimary,
  },
  dayItemFuture: {
    backgroundColor: COLORS.cardBgLight,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  checkMark: {
    color: COLORS.emerald,
    fontWeight: '800',
    fontSize: 14,
  },
  dayTextClaimed: {
    color: COLORS.emerald,
    fontSize: 9,
    fontWeight: '700',
  },
  dayTextToday: {
    color: COLORS.goldPrimary,
    fontSize: 9,
    fontWeight: '800',
  },
  dayTextFuture: {
    color: COLORS.textMuted,
    fontSize: 9,
    fontWeight: '600',
  },
  dayLabel: {
    color: COLORS.textSecondary,
    fontSize: 9,
    fontWeight: '600',
  },
});
