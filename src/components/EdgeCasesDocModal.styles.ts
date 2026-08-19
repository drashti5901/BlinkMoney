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
    fontSize: 17,
    fontWeight: '800',
  },
  modalSub: {
    color: COLORS.goldPrimary,
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
  introBox: {
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
  },
  introText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
  ecCard: {
    backgroundColor: COLORS.cardBgLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  ecHeader: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  tagBadge: {
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
  },
  tagText: {
    color: COLORS.goldPrimary,
    fontSize: 10,
    fontWeight: '800',
  },
  ecTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '800',
    marginVertical: 4,
  },
  boxSection: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: SPACING.sm,
    borderRadius: RADIUS.sm,
    marginVertical: 4,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.rose,
  },
  boxLabel: {
    color: COLORS.rose,
    fontSize: 11,
    fontWeight: '700',
  },
  boxText: {
    color: COLORS.textPrimary,
    fontSize: 11,
    marginTop: 2,
  },
  boxSectionSuccess: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    padding: SPACING.sm,
    borderRadius: RADIUS.sm,
    marginTop: 4,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.emerald,
  },
  boxLabelSuccess: {
    color: COLORS.emerald,
    fontSize: 11,
    fontWeight: '700',
  },
  boxTextSuccess: {
    color: COLORS.textPrimary,
    fontSize: 11,
    marginTop: 2,
  },
  doneBtn: {
    backgroundColor: COLORS.goldPrimary,
    paddingVertical: SPACING.md - 2,
    borderRadius: RADIUS.md,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#000',
    fontWeight: '800',
    fontSize: 14,
  },
});
