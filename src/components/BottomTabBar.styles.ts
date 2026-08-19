import { StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderTopWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.xs + 2,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.xs + 2,
    borderRadius: RADIUS.full,
  },
  activeTabPill: {
    backgroundColor: COLORS.limePrimary,
    paddingHorizontal: SPACING.md,
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  activeIcon: {
    color: COLORS.textDark,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  activeTabLabel: {
    color: COLORS.textDark,
    fontWeight: '800',
  },
});
