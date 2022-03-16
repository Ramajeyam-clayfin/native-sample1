import { ScrollView, Text, StyleSheet, View, Button, TouchableHighlight } from "react-native"
import { useState } from 'react';

export const Component3 = () =>{
    const [view, setView]= useState(false);
    let text1= `Align-Items : ${view? 'open' : 'closed'}`
    const Component2Style = StyleSheet.create({
        text:{
            color:"yellow",
        },
        container:{
            flex: 1,
            backgroundColor:"#ff9999",
            margin:20,
            padding:10,
        }
    })

    return(
        <View style={Component2Style.container}>
            
        <View >
            <Text style={Component2Style.text}>This is Component 3 </Text>
            
        </View>
       
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Button title={text1} onPress={()=>setView(!view)}/>
            { view ? <Alignitems/> : null }
               
            </View>
        </View>
    )

}

const Alignitems =()=>{
    const [alignitem, setalignitem]= useState('flex-start');

    return(
        <View style={{flex:1, margin:10,}}>
           <View style={{flex:1, flexDirection:"row"}}>

                <View style={{flex:1, margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setalignitem("flex-start")}>
                        <Text style={styles.textContainer}>Start</Text>
                    </TouchableHighlight>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setalignitem("center")}>
                        <Text style={styles.textContainer}>Center</Text>
                    </TouchableHighlight>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setalignitem("flex-end")}>
                        <Text style={styles.textContainer}>End</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flex:1, flexDirection:"row"}}>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setalignitem("stretch")}>
                        <Text style={styles.textContainer}>Stretch</Text>
                    </TouchableHighlight>
                </View>

                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button}  onPress={()=>setalignitem("baseline")}>
                        <Text style={styles.textContainer}>Baseline</Text>
                    </TouchableHighlight>
                </View>
            </View>
            {/* {console.log(justify)} */}
        
            <View  style={{flex:1, alignItems: alignitem, margin: 20, flexDirection: "column",   borderWidth:2 }}>
    
                <View style={{height:50, width:50, backgroundColor: 'red'}}> 
                    <Text style={styles.text}>R</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'blue'}}>
                    <Text style={styles.text}>B</Text>
                </View>

                <View style={{  backgroundColor: 'green'}}>
                    <Text style={styles.text}>G</Text>
                </View>
            </View>
      </View>
    )
}

const styles = {
    textContainer: {
      fontSize: 15,
      fontWeight: "100",
      color:"black"
    },
    button:{
        alignItems:"center",
        padding: 10,
        backgroundColor:"#ff9999",
        height:40
    },
    text : {
        color:"white",
        fontSize:20
      }
  };