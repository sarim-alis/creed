import { Pressable, Text, View } from 'react-native';
import { quickRepliesStyles as styles } from '../../styles/components/QuickReplies';

const REPLIES = ['Help me talk to God', 'I am struggling right now'];

export function QuickReplies() {
  return (
    <View style={styles.wrap}>
      {REPLIES.map((label) => (
        <Pressable
          key={label}
          accessibilityRole="button"
          onPress={() => console.log(`quick-reply:${label}`)}
          style={styles.chip}
        >
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
