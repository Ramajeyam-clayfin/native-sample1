import { ScrollView, Text, StyleSheet } from "react-native"

export const Component2 = () =>{
    const Component2Style = StyleSheet.create({
        text:{
            color:"blue",
        },
        container:{
            flex: 0.2,
            
            backgroundColor:"grey"
        }
    })

    return(
        <ScrollView style={Component2Style.container}>
            <Text style={Component2Style.text}>Component 2 </Text>
            <Text style={Component2Style.text}>Component 2 </Text>
        


        </ScrollView>
    )

}