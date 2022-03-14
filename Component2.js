import { ScrollView, Text, StyleSheet, View, Button } from "react-native"
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
                    <Button title="start" onPress={()=>setjustify("flex-start")}/>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <Button title="center" onPress={()=>setjustify("center")}/>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <Button title="end" onPress={()=>setjustify("flex-end")}/>
                </View>
        
                <View style={{flex:1,  margin:5}}>
                    <Button title="space-between" onPress={()=>setjustify("space-between")}/>
                </View>

                <View style={{flex:1,  margin:5}}>
                    <Button title="space-around" onPress={()=>setjustify("space-around")}/>
                </View>

                <View style={{flex:1,  margin:5}}>
                    <Button title="space-evenly" onPress={()=>setjustify("space-evenly")}/>
                </View>
            </View>
            {/* {console.log(justify)} */}
        
            <View  style={{flex:1, justifyContent: justify, margin: 20, flexDirection: "row",  alignContent:"center", borderWidth:2 }}>
    
                <View style={{height:50, width:50, backgroundColor: 'red'}}> 
                    <Text style={styles.textContainer}>R</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'blue'}}>
                    <Text style={styles.textContainer}>B</Text>
                </View>

                <View style={{height:50, width:50, backgroundColor: 'green'}}>
                    <Text style={styles.textContainer}>G</Text>
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
  };