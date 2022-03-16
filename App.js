import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { Button} from 'react-native-elements';
import { ExternalStyle } from './ExternalStyle';
import { Component2 } from './Component2';
import { Component3 } from './Component3';
import { Component4 } from './Component4';
import { Component5 } from './Component5';
import { Component6 } from './Component6';


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
      <Component3/>
      <Component4/>
      <Component5/>
      <Component6/>
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
    <View style={{flex:1, margin:10, backgroundColor:"white",}}>

      <View style={{flex:1, flexDirection:"row"}}>

        <View style={{flex:1, margin:5}}>
          <TouchableOpacity style={styles1.button} onPress={()=>setdirection("row")}>
            <Text style={styles1.text}>Row</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,  margin:5}}>
          <TouchableHighlight style={styles1.button} underlayColor="#ff66cc" onPress={()=>setdirection("row-reverse")}>
            <Text style={{color:"black", fontSize:10}}>Row Reverse</Text>
          </TouchableHighlight>
        </View>

        <View style={{flex:1,  margin:5}}>
          
            <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('lime', false)}  onPress={()=>setdirection("column")}>
              <View style={styles1.button}>
              <Text style={[styles1.text, {fontSize:12}]}>Column</Text>
              </View>
            </TouchableNativeFeedback>
         
        </View>

        <View style={{flex:1,  margin:5}}>
          <View style={styles1.button}>
          <TouchableWithoutFeedback   onPress={()=>setdirection("column-reverse")}>
            <Text style={[styles1.text, {fontSize:10}]}>Column Reverse</Text>
          </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      {/* {console.log(typeof(direction))} */}
      
      <View  style={{width:270, height:200, margin:20, flexDirection: direction,  borderWidth:2,   }}>

        <View style={{flex:1, backgroundColor: 'red'}}/>
        <View style={{flex:2, backgroundColor: 'blue'}}/>
        <View style={{flex:3, backgroundColor: 'green'}}/>
      </View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  button: {
    alignItems:"center",
    padding: 10,
    backgroundColor: "#ffff4d",
    height:40
  },
  text : {
    color:"black"
  }
})

