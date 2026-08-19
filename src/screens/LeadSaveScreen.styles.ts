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
  
  // Lead Magnet Banner
  leadMagnetCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.limePrimary,
    overflow: 'hidden',
  },
  leadBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  leadBadgeText: {
    color: COLORS.limePrimary,
    fontSize: 11,
    fontWeight: '800',
    backgroundColor: 'rgba(134, 239, 70, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
  },
  leadTitle: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  leadSub: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  claimGiftBtn: {
    backgroundColor: COLORS.limePrimary,
    paddingVertical: SPACING.md - 2,
    borderRadius: RADIUS.md,
    alignItems: 'center',
  },
  claimGiftText: {
    color: COLORS.textDark,
    fontSize: 13,
    fontWeight: '800',
  },
});
