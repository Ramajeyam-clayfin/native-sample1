import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ExternalStyle } from './ExternalStyle';
import { Component2 } from './Component2';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Hello friend !!</Text>
      <View style={ExternalStyle.container}>
        <Text style={ExternalStyle.text}>This is a External style</Text>
      </View>
      <Component2/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
