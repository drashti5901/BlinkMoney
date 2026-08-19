import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ActiveTab } from '../types';
import { WHY_BLINKMONEY_FEATURES, OFFICIAL_FAQS } from '../data/mockData';
import { styles } from './HomeScreen.styles';

interface Props {
  onNavigateTab: (tab: ActiveTab) => void;
  onClaimStarterGift: () => void;
}

export const HomeScreen: React.FC<Props> = ({ onNavigateTab, onClaimStarterGift }) => {
  // Calculator interactive state
  const [dailyInvestment, setDailyInvestment] = useState<number>(100);
  const [tenureYears, setTenureYears] = useState<number>(1);
  const [frequency, setFrequency] = useState<'DAILY' | 'MONTHLY'>('DAILY');
  
  // Accordion open FAQs state
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  // Calculate estimated SIP return (~14% APY)
  const days = tenureYears * 365;
  const totalInvested = dailyInvestment * (frequency === 'DAILY' ? days : tenureYears * 12);
  const projectedReturn = Math.round(totalInvested * (1 + 0.14 * tenureYears));

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Lead Magnet Banner (Screenshot 2 + Lead Magnet Hook) */}
        <View style={styles.leadBanner}>
          <Text style={styles.leadBannerGreen}>🎁 Free 20mg 24K Gold Welcome Gift!</Text>
          <Text style={styles.leadBannerTitle}>Your money is sitting idle. Make it work from today.</Text>
          <Text style={styles.leadBannerSub}>
            Zero lock-in. No paperwork. Activate your 24K Gold Vault and unlock instant 85% LTV cash credit line.
          </Text>
          <TouchableOpacity style={styles.leadTagPill} onPress={onClaimStarterGift} activeOpacity={0.85}>
            <Text style={styles.leadTagText}>⚡ Claim 20mg Starter Gold & Activate</Text>
          </TouchableOpacity>
        </View>

        {/* Portfolio Balance Card (Screenshot 2) */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceRowHeader}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <TouchableOpacity style={styles.savePillBtn} onPress={() => onNavigateTab('SAVE')}>
              <Text style={styles.savePillText}>Save</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceValue}>₹1,10,973 INR</Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Lifetime returns</Text>
            <Text style={styles.metaValueGreen}>+₹3,420 (+11.2%)</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Invested Collateral</Text>
            <Text style={styles.metaValue}>₹1,07,553</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>XIRR Yield</Text>
            <Text style={styles.metaValueGreen}>14.2%</Text>
          </View>

          <View style={styles.investBtnRow}>
            <TouchableOpacity style={styles.sipsBtn} onPress={() => onNavigateTab('SAVE')}>
              <Text style={styles.sipsBtnText}>My SIPs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.investMoreBtn} onPress={() => onNavigateTab('SAVE')}>
              <Text style={styles.investMoreBtnText}>Invest more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Interactive SIP Growth Calculator (Screenshot 2 & 3) */}
        <Text style={styles.sectionHeaderTitle}>SIP Calculator</Text>
        <View style={styles.calcCard}>
          <Text style={styles.calcHeaderLabel}>
            ₹{dailyInvestment} {frequency.toLowerCase()} for {tenureYears} year{tenureYears > 1 ? 's' : ''} could grow to
          </Text>
          <Text style={styles.calcTargetValue}>₹{projectedReturn.toLocaleString('en-IN')}</Text>

          {/* Interactive Amount Pickers */}
          <View style={styles.chipRow}>
            {[21, 50, 100, 250, 500].map((amt) => (
              <TouchableOpacity
                key={amt}
                style={[styles.calcChip, dailyInvestment === amt && styles.calcChipActive]}
                onPress={() => setDailyInvestment(amt)}
              >
                <Text style={[styles.calcChipText, dailyInvestment === amt && styles.calcChipTextActive]}>
                  ₹{amt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Frequency Selector */}
          <View style={styles.chipRow}>
            <TouchableOpacity
              style={[styles.calcChip, frequency === 'DAILY' && styles.calcChipActive]}
              onPress={() => setFrequency('DAILY')}
            >
              <Text style={[styles.calcChipText, frequency === 'DAILY' && styles.calcChipTextActive]}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.calcChip, frequency === 'MONTHLY' && styles.calcChipActive]}
              onPress={() => setFrequency('MONTHLY')}
            >
              <Text style={[styles.calcChipText, frequency === 'MONTHLY' && styles.calcChipTextActive]}>
                Monthly
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tenure Selector */}
          <View style={styles.chipRow}>
            {[1, 5, 10].map((yr) => (
              <TouchableOpacity
                key={yr}
                style={[styles.calcChip, tenureYears === yr && styles.calcChipActive]}
                onPress={() => setTenureYears(yr)}
              >
                <Text style={[styles.calcChipText, tenureYears === yr && styles.calcChipTextActive]}>
                  {yr} Year{yr > 1 ? 's' : ''}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Features 2-Grid (Screenshot 3) */}
        <Text style={styles.sectionHeaderTitle}>Features</Text>
        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.featureCard} onPress={() => onNavigateTab('SAVE')}>
            <View style={styles.iconCircle}>
              <Text style={{ fontSize: 20 }}>📈</Text>
            </View>
            <Text style={styles.featureTitle}>Save</Text>
            <Text style={styles.featureDesc}>Start a SIP and grow wealth on autopilot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard} onPress={() => onNavigateTab('BORROW')}>
            <View style={styles.iconCircle}>
              <Text style={{ fontSize: 20 }}>💳</Text>
            </View>
            <Text style={styles.featureTitle}>Borrow</Text>
            <Text style={styles.featureDesc}>Instant cash without selling your investments</Text>
          </TouchableOpacity>
        </View>

        {/* Why BlinkMoney? (Screenshot 3 & 4) */}
        <Text style={styles.sectionHeaderTitle}>Why BlinkMoney?</Text>
        <View style={styles.whyGrid}>
          {WHY_BLINKMONEY_FEATURES.map((item) => (
            <View key={item.id} style={styles.whyCard}>
              <Text style={{ fontSize: 18 }}>{item.icon}</Text>
              <Text style={styles.whyTitle}>{item.title}</Text>
              <Text style={styles.whyDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>

        {/* Founder Quote (Screenshot 4) */}
        <Text style={styles.sectionHeaderTitle}>Built by investors, for investors</Text>
        <View style={styles.founderCard}>
          <Text style={styles.founderQuote}>
            "India's first all-in-one finance solution platform made for the aspirational rich."
          </Text>
          <Text style={styles.founderName}>Rishabh Roy</Text>
          <Text style={styles.founderRole}>Founder, BlinkMoney</Text>
        </View>

        {/* FAQs Accordion List (Screenshot 4) */}
        <Text style={styles.sectionHeaderTitle}>FAQs</Text>
        {OFFICIAL_FAQS.map((faq) => {
          const isOpen = expandedFaqId === faq.id;
          return (
            <View key={faq.id} style={styles.faqItemCard}>
              <TouchableOpacity style={styles.faqHeader} onPress={() => toggleFaq(faq.id)} activeOpacity={0.8}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Text style={styles.faqArrow}>{isOpen ? '▲' : '▼'}</Text>
              </TouchableOpacity>
              {isOpen && (
                <View style={styles.faqBody}>
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
