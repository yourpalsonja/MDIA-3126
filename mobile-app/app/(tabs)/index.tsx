import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
   <View>
     <Text>This is my "index" page 🍓</Text>
     <Link href="/sandwich">🥪 Sandwich page</Link>
     <Link href="/cheese">🧀 Cheese page</Link>
   </View>
  )
}