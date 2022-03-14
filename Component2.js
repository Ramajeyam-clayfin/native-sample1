import { ScrollView, Text, StyleSheet } from "react-native"

export const Component2 = () =>{
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
        <ScrollView style={Component2Style.container}>
            <Text style={Component2Style.text}>This is Component 2 </Text>
            <Text style={Component2Style.text}>This is Component 2 </Text>
        </ScrollView>
    )

}