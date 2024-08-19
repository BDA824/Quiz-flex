import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxStart}>
        <Text>A</Text>
      </View>
      <View style={styles.boxMid}>
        <View style={styles.boxSec}></View>
        <View style={styles.boxSec}></View>
        <View style={styles.boxSec}></View>
        <View style={styles.boxSec}></View>
        <View style={styles.boxSec}></View>
        <View style={styles.boxSec}></View>
      </View>
      <View style={styles.boxBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  boxStart: {
    height: 165,
    backgroundColor: '#868686',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 10
  },
  boxMid: {
    height: 285,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    gap: 30
  },
  boxSec: {
    height: 75,
    width: 75,
    backgroundColor: '#868686',
    borderRadius: 10
  },
  boxBottom: {
    backgroundColor: '#868686',
    height: 165,
    borderRadius: 15,
    margin: 10
  }
});
