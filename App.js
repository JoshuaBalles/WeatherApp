import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import CurrentWeather from './src/CurrentWeather';

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App