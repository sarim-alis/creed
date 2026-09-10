import type { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { homeHeaderStyles as styles } from '../../styles/components/HomeHeader';

type HeaderAction = {
  key: string;
  onPress?: () => void;
};

export function HomeHeader() {
  const onPress = (key: string) => {
    console.log(`header:${key}`);
  };

  return (
    <View style={styles.row}>
      <HeaderIcon onPress={() => onPress('journal')}>
        <Ionicons name="book-outline" size={24} color={colors.card} />
      </HeaderIcon>

      <HeaderIcon onPress={() => onPress('church')}>
        <MaterialCommunityIcons name="church" size={24} color={colors.card} />
      </HeaderIcon>

      <Pressable
        accessibilityRole="button"
        onPress={() => onPress('home')}
        style={styles.centerButton}
      >
        <MaterialCommunityIcons name="cross" size={28} color={colors.primary} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>12</Text>
        </View>
      </Pressable>

      <HeaderIcon onPress={() => onPress('scroll')}>
        <MaterialCommunityIcons name="script-text-outline" size={24} color={colors.card} />
      </HeaderIcon>

      <HeaderIcon onPress={() => onPress('profile')}>
        <Ionicons name="person-outline" size={24} color={colors.card} />
      </HeaderIcon>
    </View>
  );
}

function HeaderIcon({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: HeaderAction['onPress'];
}) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.sideButton}>
      {children}
    </Pressable>
  );
}
