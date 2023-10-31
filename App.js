import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';
import CurrentWeather from './src/CurrentWeather';
import UpcomingWeather from './src/UpcomingWeather';

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
})

export default App