import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
  return (
  <View>
    <Text>This is my "🥪" page</Text>
    <Link href="/cheese">🧀 Cheese page</Link>
  </View>
  )
}

// https://docs.expo.dev/router/navigating-pages/#understanding-native-navigation