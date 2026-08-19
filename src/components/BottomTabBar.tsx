import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActiveTab } from '../types';
import { SPACING } from '../theme/colors';
import { styles } from './BottomTabBar.styles';

interface Props {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomTabBar: React.FC<Props> = ({ activeTab, onSelectTab }) => {
  const insets = useSafeAreaInsets();

  const tabs: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'HOME', label: 'Home', icon: '🏠' },
    { id: 'SAVE', label: 'Save', icon: '🪙' },
    { id: 'BORROW', label: 'Borrow', icon: '₹' },
    { id: 'REWARDS', label: 'Rewards', icon: '🎁' },
  ];

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, SPACING.xs + 2) },
      ]}
    >
      <View style={styles.tabRow}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabItem, isActive && styles.activeTabPill]}
              onPress={() => onSelectTab(tab.id)}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabIcon, isActive && styles.activeIcon]}>
                {tab.icon}
              </Text>
              <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
