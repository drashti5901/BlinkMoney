import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './OfficialHeader.styles';

interface Props {
  userName?: string;
  onOpenHelp: () => void;
  onOpenEdgeCases: () => void;
}

export const OfficialHeader: React.FC<Props> = ({
  userName = 'Drashti',
  onOpenHelp,
  onOpenEdgeCases,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>DG</Text>
        </View>
        <View>
          <Text style={styles.greetingTitle}>Hello {userName}</Text>
          <Text style={styles.greetingSub}>Welcome!</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.specBtn} onPress={onOpenEdgeCases} activeOpacity={0.8}>
          <Text style={styles.specBtnText}>📋 Edge Cases</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpBtn} onPress={onOpenHelp} activeOpacity={0.85}>
          <Text style={styles.helpText}>💬 Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
