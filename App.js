import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ExternalStyle } from './ExternalStyle';
import { Component2 } from './Component2';

export default function App() {
  const [view, setView]= useState(false);

  return (
   
    <View style={styles.container}>
      <StatusBar style="auto" 
       animated={true}
       backgroundColor="#80ffaa"
      />
      <Text style={{padding:10, margin:10, top:15}}>Hello Iam App.js !!</Text>
      <View style={ExternalStyle.container}>
        <Text style={ExternalStyle.text}>This is a External styles</Text>
        <Button title="Flex Direction" onPress={()=>setView(!view)}/>
        { view ? <Flexdirection/> : null }
       
      </View>
      <Component2/>
    </View>
  );
}

const Flexdirection = () =>{
  const [direction, setdirection]= useState('row');
  console.log(direction)
  return(
    <View style={{flex:1, margin:10,}}>

      <View style={{flex:0.4, flexDirection:"row"}}>

        <View style={{flex:1, margin:5}}>
          <Button title="row" onPress={()=>setdirection("row")}/>
        </View>

        <View style={{flex:1,  margin:5}}>
          <Button title="row-reverse" onPress={()=>setdirection("row-reverse")}/>
        </View>

        <View style={{flex:1,  margin:5}}>
          <Button title="column" onPress={()=>setdirection("column")}/>
        </View>

        <View style={{flex:1,  margin:5}}>
          <Button title="column-reverse" onPress={()=>setdirection("column-reverse")}/>
        </View>
      </View>
      {/* {console.log(typeof(direction))} */}
      
      <View  style={{flex:0.5, margin:10, flexDirection: direction }}>

        <View style={{flex:1, backgroundColor: 'red'}}/>
        <View style={{flex:2, backgroundColor: 'blue'}}/>
        <View style={{flex:3, backgroundColor: 'green'}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
