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
  leadBanner: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.limePrimary,
    overflow: 'hidden',
  },
  leadBannerGreen: {
    color: COLORS.limePrimary,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 4,
  },
  leadBannerTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '800',
    fontStyle: 'italic',
    lineHeight: 28,
  },
  leadBannerSub: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 8,
    lineHeight: 18,
  },
  leadTagPill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(134, 239, 70, 0.12)',
    borderColor: COLORS.limePrimary,
    borderWidth: 1,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
    marginTop: 10,
  },
  leadTagText: {
    color: COLORS.limePrimary,
    fontSize: 11,
    fontWeight: '700',
  },

  // Balance Card
  balanceCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  balanceRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  balanceLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  savePillBtn: {
    backgroundColor: COLORS.limePrimary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
  },
  savePillText: {
    color: COLORS.textDark,
    fontSize: 12,
    fontWeight: '800',
  },
  balanceValue: {
    color: COLORS.textPrimary,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: SPACING.md,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderTopWidth: 1,
    borderTopColor: COLORS.cardBorderSubtle,
  },
  metaLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  metaValue: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '600',
  },
  metaValueGreen: {
    color: COLORS.limePrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  investBtnRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginTop: SPACING.md,
  },
  sipsBtn: {
    flex: 1,
    backgroundColor: COLORS.cardBgLight,
    paddingVertical: SPACING.md - 2,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  sipsBtnText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '700',
  },
  investMoreBtn: {
    flex: 1,
    backgroundColor: COLORS.limePrimary,
    paddingVertical: SPACING.md - 2,
    borderRadius: RADIUS.md,
    alignItems: 'center',
  },
  investMoreBtnText: {
    color: COLORS.textDark,
    fontSize: 13,
    fontWeight: '800',
  },

  // SIP Calculator (Screenshot 2 & 3)
  sectionHeaderTitle: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  calcCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    alignItems: 'center',
  },
  calcHeaderLabel: {
    color: COLORS.limePrimary,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  calcTargetValue: {
    color: COLORS.textPrimary,
    fontSize: 34,
    fontWeight: '800',
    marginVertical: SPACING.xs,
  },
  chipRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    width: '100%',
    marginTop: SPACING.sm,
  },
  calcChip: {
    flex: 1,
    backgroundColor: COLORS.cardBgLight,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  calcChipActive: {
    borderColor: COLORS.limePrimary,
    backgroundColor: 'rgba(134, 239, 70, 0.12)',
  },
  calcChipText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  calcChipTextActive: {
    color: COLORS.limePrimary,
    fontWeight: '800',
  },

  // Features 2-Grid (Screenshot 3)
  gridRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  featureCard: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  featureTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 4,
  },
  featureDesc: {
    color: COLORS.textSecondary,
    fontSize: 11,
    lineHeight: 16,
  },

  // Why BlinkMoney 6-Grid (Screenshot 3 & 4)
  whyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  whyCard: {
    width: '47.5%',
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
  },
  whyTitle: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '800',
    marginTop: 4,
    marginBottom: 2,
  },
  whyDesc: {
    color: COLORS.textSecondary,
    fontSize: 11,
    lineHeight: 15,
  },

  // Founder Quote Card (Screenshot 4)
  founderCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  founderQuote: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: SPACING.md,
  },
  founderName: {
    color: COLORS.limePrimary,
    fontSize: 14,
    fontWeight: '800',
  },
  founderRole: {
    color: COLORS.textSecondary,
    fontSize: 11,
  },

  // FAQs Accordion List (Screenshot 4)
  faqItemCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.cardBorderSubtle,
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
  },
  faqQuestion: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '700',
    flex: 1,
  },
  faqArrow: {
    color: COLORS.limePrimary,
    fontSize: 14,
    fontWeight: '800',
  },
  faqBody: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.cardBorderSubtle,
    paddingTop: SPACING.sm,
  },
  faqAnswer: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
});
