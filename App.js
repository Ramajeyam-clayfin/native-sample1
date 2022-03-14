import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button} from 'react-native-elements';
import { ExternalStyle } from './ExternalStyle';
import { Component2 } from './Component2';

export default function App() {
  const [view, setView]= useState(false);
  let text1= `Flex Direction : ${view? 'open' : 'closed'}`

  return (
   
    <ScrollView style={styles.container}>
      <StatusBar style="auto" 
       animated={true}
       backgroundColor="#80ffaa"
      />
      <Text style={{padding:10, margin:10, top:15}}>Hello Iam App.js !!</Text>
      <View style={ExternalStyle.container}>
        <Text style={ExternalStyle.text}>This is a External styles</Text>
        <Button title={text1} onPress={()=>setView(!view)}/>
        { view ? <Flexdirection/> : null }
       
      </View>
      <Component2/>
      <Component2/>
      <Component2/>
      <Component2/>
      <Component2/>
      <Component2/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const Flexdirection = () =>{
  const [direction, setdirection]= useState('column');
  // console.log(direction)
  return(
    <View style={{flex:1, margin:10,}}>

      <View style={{flex:1, flexDirection:"row"}}>

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
      
      <View  style={{width:270, height:200, margin:20, flexDirection: direction,  borderWidth:2,  }}>

        <View style={{flex:1, backgroundColor: 'red'}}/>
        <View style={{flex:2, backgroundColor: 'blue'}}/>
        <View style={{flex:3, backgroundColor: 'green'}}/>
      </View>
    </View>
  )
}


