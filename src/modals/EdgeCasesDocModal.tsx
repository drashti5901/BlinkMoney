import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SPACING } from '../theme/colors';
import { EDGE_CASES_CATALOG } from '../data/mockData';
import { styles } from './EdgeCasesDocModal.styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const EdgeCasesDocModal: React.FC<Props> = ({ visible, onClose }) => {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { paddingBottom: Math.max(insets.bottom, SPACING.lg) }]}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>📑 Engineering Edge Cases Catalog</Text>
              <Text style={styles.modalSub}>BlinkMoney Architecture & Fintech Risk Guardrails</Text>
            </View>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollBody} showsVerticalScrollIndicator={false}>
            <View style={styles.introBox}>
              <Text style={styles.introText}>
                Below is the comprehensive list of critical edge cases identified for the BlinkMoney Save ➔ Grow ➔ Borrow engine and how each is handled in production:
              </Text>
            </View>

            {EDGE_CASES_CATALOG.map((ec) => (
              <View key={ec.id} style={styles.ecCard}>
                <View style={styles.ecHeader}>
                  <View style={styles.tagBadge}>
                    <Text style={styles.tagText}>{ec.id} • {ec.category}</Text>
                  </View>
                </View>

                <Text style={styles.ecTitle}>{ec.title}</Text>
                
                <View style={styles.boxSection}>
                  <Text style={styles.boxLabel}>⚠️ Scenario / Problem:</Text>
                  <Text style={styles.boxText}>{ec.description}</Text>
                </View>

                <View style={styles.boxSectionSuccess}>
                  <Text style={styles.boxLabelSuccess}>✅ Production Mitigation & Handling:</Text>
                  <Text style={styles.boxTextSuccess}>{ec.resolution}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.doneBtn} onPress={onClose}>
            <Text style={styles.doneBtnText}>Close Catalog</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
