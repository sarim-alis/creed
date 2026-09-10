import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const chatBubblesStyles = StyleSheet.create({
  wrap: {
    marginTop: 28,
    paddingHorizontal: 20,
    gap: 10,
    maxWidth: '88%',
    alignSelf: 'flex-start',
  },
  bubble: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderBottomLeftRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  text: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 21,
  },
});
