import { ScrollView, Text, StyleSheet, View, Button, TouchableHighlight } from "react-native"
import { useState } from 'react';

export const Component4 = () =>{
    const [view, setView]= useState(false);
    let text1= `Position : ${view? 'open' : 'closed'}`
    const Component2Style = StyleSheet.create({
        text:{
            color:"white",
        },
        container:{
            flex: 1,
            backgroundColor:"#ff80ff",
            margin:20,
            padding:10,
        }
    })

    return(
        <View style={Component2Style.container}>
            
        <View >
            <Text style={Component2Style.text}>This is Component 4 </Text>
            
        </View>
       
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Button title={text1} onPress={()=>setView(!view)}/>
            { view ? <Position1/> : null }
               
            </View>
        </View>
    )

}

const Position1 =()=>{
    const [pos, setPos]= useState('relative');

    return(
        <View style={{flex:1, margin:10,}}>
            <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:1, margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setPos("absolute")}>
                        <Text style={styles.text}>Absolute</Text>
                    </TouchableHighlight>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setPos("relative")}>
                        <Text style={styles.text}>Relative</Text>
                    </TouchableHighlight>
                </View>
            </View>
            {/* {console.log(justify)} */}
        
            <View  style={{height:250, width:300, borderWidth:2, }}>
    
                <View style={{height:50, width:50, backgroundColor: 'red', top:20, left:20, position:pos}}> 
                    <Text style={styles.text}>R</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'blue', top:40, left:40, position:pos}}>
                    <Text style={styles.text}>B</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'green', top:60, left:60, position:pos}}>
                    <Text style={styles.text}>G</Text>
                </View>
            </View>
      </View>
    )
}

const styles = {
    textContainer: {
      fontSize: 26,
      fontWeight: "100",
    },
    button:{
        alignItems:"center",
        padding: 10,
        backgroundColor: "#ff80ff",
        height:40
    },
    text : {
        color:"white",
        fontSize:20
      }
  };
