import { View, StyleSheet } from 'react-native';
import { WigglyStrawberry } from '@/components/WigglyStrawberry';

export default function HomeScreen() {
  return (
 
      <View style={styles.titleContainer}>
        <WigglyStrawberry />
      </View>
     
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'papayawhip'
  }
});
