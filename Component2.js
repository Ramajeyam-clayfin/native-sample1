import { ScrollView, Text, StyleSheet, View, Button, TouchableHighlight } from "react-native"
import { useState } from 'react';

export const Component2 = () =>{
    const [view, setView]= useState(false);
    let text1= `Justify-Content : ${view? 'open' : 'closed'}`
    const Component2Style = StyleSheet.create({
        text:{
            color:"#ff5c33",
        },
        container:{
            flex: 1,
            backgroundColor:"#80bfff",
            margin:20,
            padding:10,
        }
    })

    return(
        <View style={Component2Style.container}>
            
        <View >
            <Text style={Component2Style.text}>This is Component 2 </Text>
            
        </View>
       
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Button title={text1} onPress={()=>setView(!view)}/>
            { view ? <Justifycontent1/> : null }
               
            </View>
        </View>
    )

}

const Justifycontent1 =()=>{
    const [justify, setjustify]= useState('flex-start');

    return(
        <View style={{flex:1, margin:10,}}>
            <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:1, margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setjustify("flex-start")}>
                        <Text style={styles.textContainer}>Start</Text>
                    </TouchableHighlight>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setjustify("center")}>
                        <Text style={styles.textContainer}>Center</Text>
                    </TouchableHighlight>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setjustify("flex-end")}>
                        <Text style={styles.textContainer}>End</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flex:1, flexDirection:"row"}}>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setjustify("space-between")}>
                        <Text style={styles.textContainer}>Space Between</Text>
                    </TouchableHighlight>
                </View>

                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button}  onPress={()=>setjustify("space-around")}>
                        <Text style={styles.textContainer}>Space Around</Text>
                    </TouchableHighlight>
                </View>

                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setjustify("space-evenly")}>
                        <Text style={styles.textContainer}>Space Evenly</Text>
                    </TouchableHighlight>
                </View>
            </View>
            {/* {console.log(justify)} */}
        
            <View  style={{flex:1, justifyContent: justify, margin: 20, flexDirection: "row",  alignContent:"center", borderWidth:2 }}>
    
                <View style={{height:50, width:50, backgroundColor: 'red'}}> 
                    <Text style={styles.text}>R</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'blue'}}>
                    <Text style={styles.text}>B</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'green'}}>
                    <Text style={styles.text}>G</Text>
                </View>
            </View>
      </View>
    )
}

const styles = {
    textContainer: {
      fontSize: 10,
      color:"black"
      
    },
    button:{
        alignItems:"center",
        padding: 10,
        backgroundColor: "#80bfff",
        height:40
    },
    text : {
        color:"white",
        fontSize:20,
        fontWeight: "100",
      }
  };
