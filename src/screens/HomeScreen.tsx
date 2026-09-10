import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  ChatBubbles,
  HomeHeader,
  MessageInput,
  QuickReplies,
} from '../components/home';
import { homeScreenStyles as styles } from '../styles/screens/HomeScreen';

const backgroundImage = require('../../assets/background.png');

export function HomeScreen() {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
          <HomeHeader />
          <ChatBubbles />
          <View style={styles.spacer} />
          <QuickReplies />
          <MessageInput />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
