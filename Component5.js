import { ScrollView, Text, StyleSheet, View, Button, TouchableHighlight } from "react-native"
import { useState } from 'react';

export const Component5 = () =>{
    const [view, setView]= useState(false);
    let text1= `Flex Grow / Shrink : ${view? 'open' : 'closed'}`
    const Component2Style = StyleSheet.create({
        text:{
            color:"white",
        },
        container:{
            flex: 1,
            backgroundColor:"#8080ff",
            margin:20,
            padding:10,
        }
    })

    return(
        <View style={Component2Style.container}>
            
        <View >
            <Text style={Component2Style.text}>This is Component 5 </Text>
            
        </View>
       
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Button title={text1} onPress={()=>setView(!view)}/>
            { view ? <Flexgrowshrink/> : null }
               
            </View>
        </View>
    )

}

const Flexgrowshrink =()=>{
    const [Grow, setGrow]= useState(0);
    const [Shrink, setShrink]= useState(0);

    return(
        <View style={{flex:1, margin:10,}}>
            <View style={{flex:1, flexDirection:"row"}}>
                <View style={{flex:1, margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setGrow( Grow ? 0:1 )}>
                        <Text style={styles.text}>Grow</Text>
                    </TouchableHighlight>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <TouchableHighlight style={styles.button} onPress={()=>setShrink( Shrink ? 0:1 )}>
                        <Text style={styles.text}>Shrink</Text>
                    </TouchableHighlight>
                </View>
            </View>
            {/* {console.log(justify)} */}
            <View style={{flex:1, flexDirection:"row"}}>
        
                <View  style={{height:250, width:70, borderWidth:2, margin:10}}>
        
                    <View style={{height:50, width:50, backgroundColor: 'red', }}> 
                        <Text style={styles.text}>R</Text>
                    </View>

                    <View style={{height:50, width:50,  backgroundColor: 'blue', }}>
                        <Text style={styles.text}>B</Text>
                    </View>

                    <View style={{height:50, width:50, backgroundColor: 'green', flexGrow: Grow }}>
                        <Text style={styles.text}>G</Text>
                    </View>
                </View>
                <View  style={{height:250, width:70, borderWidth:2, margin:10, marginLeft:80 }}>
        
                    <View style={{height:50, width:50, backgroundColor: 'red', }}> 
                        <Text style={styles.text}>R</Text>
                    </View>

                    <View style={{height:200, width:50, backgroundColor: 'blue', flexShrink: Shrink }}>
                        <Text style={styles.text}>B</Text>
                    </View>

                    <View style={{height:50, width:50, backgroundColor: 'green', }}>
                        <Text style={styles.text}>G</Text>
                    </View>
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
        backgroundColor: "#8080ff",
        height:40
    },
    text : {
        color:"white",
        fontSize:20
      }
  };
