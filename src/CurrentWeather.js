import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={128} color="black" />
        <Text style={styles.temp}>6°</Text>
        <Text style={styles.feels}>Feels like: 6°</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 6°</Text>
          <Text style={styles.highLow}> Low: 6°</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.message}>It is Sunny</Text>
        <Text style={styles.message}>It is a perfect T-Shirt Weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',    
  },
  temp: {
    fontSize: 48,
  },
  feels: {
    fontSize: 32,
  },
  highLow: {
    fontSize: 24,
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    paddingLeft: 24,
    marginBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  message: {
    fontSize: 24,
  },
});

export default CurrentWeather