import { Text, View } from 'react-native';
import { chatBubblesStyles as styles } from '../../styles/components/ChatBubbles';

const MESSAGES = [
  'Hi - good to meet you',
  "Before we get started - what's one thing I should know about you if we are going to be friends?",
];

export function ChatBubbles() {
  return (
    <View style={styles.wrap}>
      {MESSAGES.map((message) => (
        <View key={message} style={styles.bubble}>
          <Text style={styles.text}>{message}</Text>
        </View>
      ))}
    </View>
  );
}
