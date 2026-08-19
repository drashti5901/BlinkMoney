import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SPACING } from '../theme/colors';
import { styles } from './ViralShareModal.styles';

interface Props {
  visible: boolean;
  squadCode: string;
  unlockedLimit: number;
  onClose: () => void;
}

export const ViralShareModal: React.FC<Props> = ({
  visible,
  squadCode,
  unlockedLimit,
  onClose,
}) => {
  const insets = useSafeAreaInsets();
  const [copied, setCopied] = useState<boolean>(false);

  const referralLink = `https://blinkmoney.in/squad?code=${squadCode}&ref=aarav`;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { paddingBottom: Math.max(insets.bottom, SPACING.lg) }]}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>🎁 Share & Invite Friends</Text>
              <Text style={styles.modalSub}>Unlock +0.50% APY Yield Boost for Both!</Text>
            </View>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Flex Visual Share Card */}
          <View style={styles.shareCardVisual}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.cardBrand}>⚡ BlinkMoney Gold Squad</Text>
              <Text style={styles.cardGoldBadge}>24K GOLD</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.cardQuote}>
                "I unlocked ₹{unlockedLimit.toLocaleString('en-IN')} Instant Credit Line backed by Digital Gold!"
              </Text>
              <View style={styles.giftPill}>
                <Text style={styles.giftText}>
                  🎁 Free 20mg Starter Gold inside for you!
                </Text>
              </View>
            </View>

            <View style={styles.cardFooterRow}>
              <View>
                <Text style={styles.codeLabel}>Squad Invite Code</Text>
                <Text style={styles.codeVal}>{squadCode}</Text>
              </View>

              <View style={styles.qrMock}>
                <Text style={styles.qrText}>📲 SCAN</Text>
              </View>
            </View>
          </View>

          {/* Referral Code Box */}
          <View style={styles.linkContainer}>
            <Text style={styles.linkLabel}>Your Viral Deep Link:</Text>
            <View style={styles.linkBox}>
              <Text style={styles.linkText} numberOfLines={1}>
                {referralLink}
              </Text>
              <TouchableOpacity
                style={[styles.copyBtn, copied && styles.copyBtnSuccess]}
                onPress={handleCopy}
              >
                <Text style={styles.copyBtnText}>{copied ? '✓ Copied!' : 'Copy'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Social Share Buttons */}
          <View style={styles.shareActions}>
            <TouchableOpacity
              style={[styles.shareBtn, { backgroundColor: '#25D366' }]}
              onPress={handleCopy}
            >
              <Text style={styles.shareBtnText}>💬 WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.shareBtn, { backgroundColor: '#1DA1F2' }]}
              onPress={handleCopy}
            >
              <Text style={styles.shareBtnText}>🐦 Twitter / X</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.closeFullBtn} onPress={onClose}>
            <Text style={styles.closeFullText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
