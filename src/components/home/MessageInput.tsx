import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { messageInputStyles as styles } from '../../styles/components/MessageInput';

export function MessageInput() {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="button"
        onPress={() => console.log('mic')}
        style={styles.micButton}
      >
        <Ionicons name="mic" size={22} color={colors.primary} />
      </Pressable>

      <View style={styles.field}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Your message"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
        <Pressable
          accessibilityRole="button"
          onPress={() => console.log('attach')}
          style={styles.attachButton}
        >
          <Ionicons name="image-outline" size={20} color={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
}
