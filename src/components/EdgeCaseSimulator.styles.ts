import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#050608',
    borderTopWidth: 1,
    borderColor: COLORS.cardBorder,
    paddingVertical: SPACING.xs + 2,
    paddingHorizontal: SPACING.md,
  },
  bar: {
    gap: 4,
  },
  simTitle: {
    color: COLORS.goldPrimary,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  scrollContent: {
    gap: 6,
    paddingVertical: 2,
  },
  simChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBgLight,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
    gap: 4,
  },
  simChipActive: {
    borderColor: COLORS.goldPrimary,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
  chipIcon: {
    fontSize: 11,
  },
  chipText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '600',
  },
  chipTextActive: {
    color: COLORS.textPrimary,
    fontWeight: '800',
  },
});
