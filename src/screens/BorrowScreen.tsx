import React from 'react';
import { View, ScrollView } from 'react-native';
import { CreditLineState } from '../types';
import { CreditLineCard } from '../components/CreditLineCard';
import { styles } from './BorrowScreen.styles';

interface Props {
  creditLine: CreditLineState;
  interestDiscountPercent: number;
  onOpenFlashBorrow: (amount: number) => void;
}

export const BorrowScreen: React.FC<Props> = ({
  creditLine,
  interestDiscountPercent,
  onOpenFlashBorrow,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <CreditLineCard
          creditLine={creditLine}
          interestDiscountPercent={interestDiscountPercent}
          onOpenFlashBorrow={onOpenFlashBorrow}
        />
      </ScrollView>
    </View>
  );
};
