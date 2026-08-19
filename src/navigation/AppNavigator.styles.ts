import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  screenContainer: {
    flex: 1,
  },
  toastContainer: {
    position: 'absolute',
    top: 40,
    left: SPACING.lg,
    right: SPACING.lg,
    zIndex: 9999,
    backgroundColor: COLORS.limePrimary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm + 2,
    borderRadius: RADIUS.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  toastText: {
    color: COLORS.textDark,
    fontWeight: '800',
    fontSize: 12,
    textAlign: 'center',
  },
  offlineBanner: {
    backgroundColor: COLORS.rose,
    paddingVertical: SPACING.xs + 2,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
  },
  offlineText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  crashBanner: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingVertical: SPACING.xs + 4,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.rose,
  },
  crashTitle: {
    color: COLORS.rose,
    fontSize: 12,
    fontWeight: '800',
  },
  crashSub: {
    color: COLORS.textPrimary,
    fontSize: 11,
  },
  kycBanner: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingVertical: SPACING.xs + 4,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderColor: COLORS.warning,
  },
  kycTitle: {
    color: COLORS.warning,
    fontSize: 12,
    fontWeight: '800',
  },
  kycSub: {
    color: COLORS.textPrimary,
    fontSize: 11,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
    gap: SPACING.md,
  },
  loadingText: {
    color: COLORS.limePrimary,
    fontSize: 14,
    fontWeight: '700',
  },
});
