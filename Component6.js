import { Text, StyleSheet, View, Button, TouchableHighlight, Dimensions } from "react-native"
import { useState, useEffect } from 'react';

export const Component6 = () =>{
   
    const [view, setView]= useState(false);
    
    let text1= `Dimensions : ${view? 'open' : 'closed'}`;
   
   

    const Component2Style = StyleSheet.create({
        text:{
            color:"white",
        },
        container:{
            flex: 1,
            backgroundColor:"#33cc33",
            margin:20,
            padding:10,
        }
    })

    return(
        <View style={Component2Style.container}>
            
        <View >
            <Text style={Component2Style.text}>This is Component 6 </Text>
            
        </View>
       
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Button title={text1} onPress={()=>setView(!view)}/>
            { view ? <Dimensions1/> : null }
               
            </View>
        </View>
    )

}

const Dimensions1 =()=>{
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");
    const [dimensions, setDimensions] = useState({ window, screen });
    

    const onChange = ({ window, screen }) => {
      setDimensions({ window, screen });
    };
  
    useEffect(() => {
      const subscription= Dimensions.addEventListener("change", onChange);
      return () => subscription?.remove();
    });

    return(
        <View style={{flex:1, margin:10,}}>
            <View  style={{flex:1, borderWidth:2, margin:10}}>

                <Text style={styles.text}>{`Window width - ${Math.round(dimensions.window.width)}`}</Text>
                <Text style={styles.text}>{`Window height - ${Math.round(dimensions.window.height)}`}</Text>
                <Text style={styles.text}>{`Screen width - ${Math.round(dimensions.screen.width)}`}</Text>
                <Text style={styles.text}>{`Screen height - ${Math.round(dimensions.screen.height)}`}</Text>

                <View style={{flex:1, flexDirection:"row"}}>
                    <View style={{width: (Math.round(dimensions.screen.width)/4), height: (Math.round(dimensions.screen.height)/4), margin:10, borderWidth:2, backgroundColor:"#33cc33"}}>
                        <Text style={{padding:5, color:"white"}}>Screen</Text>
                    </View>

                    <View style={{width: (Math.round(dimensions.window.width)/4), height: (Math.round(dimensions.window.height)/4),margin:10, borderWidth:2, backgroundColor:"#33cc33"}}>
                        <Text style={{padding:5, color:"white"}}>Window</Text>
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
        backgroundColor: "#33cc33",
        height:40
    },
    text : {
        color:"black",
        fontSize:15,
        padding:5
      }
  };
