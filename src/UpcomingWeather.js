import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

const DATA = [
  {
    dt: '2023-10-31 12:00:00',
    main: {
      temp_min: 7.55,
      temp_max: 8.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt: '2023-10-31 13:00:00',
    main: {
      temp_min: 9.55,
      temp_max: 10.25,
    },
    weather: [
      {
        main: 'Cloudy',
      },
    ],
  },
  {
    dt: '2023-10-31 14:00:00',
    main: {
      temp_min: 10.55,
      temp_max: 11.65,
    },
    weather: [
      {
        main: 'Rainy',
      },
    ],
  },
];

const Item = (props) => {
  const { dt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name='sun' size={32} color='white' />
      <Text style={styles.date}>{dt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'pink',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 8,
    backgroundColor: 'orange',
  },
  temp: {
    color: 'yellow',
    fontSize: 16,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
});

export default UpcomingWeather;
