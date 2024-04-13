import React,{useState} from "react";
import { Text, View, StyleSheet,  Alert,  TouchableHighlight } from "react-native";

const BT2=() => {

    const onPress =()=>
    {
        Alert.alert('Hello')
    }
    return(           
            <View style={{
            }}  
            >
                <Text>
                vuongvotrungquan_2024802010331
                </Text>
                <TouchableHighlight
                    style = {styles.button}
                    onPress={onPress}
                >
                    <Text style ={styles.textbuton}>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
    )
}
export default BT2;

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#17C9F9',
      opacity: 0.5
    },
    button: {
        padding: 10,
        backgroundColor:'pink',
        alignItems:"center",
        
    },
    textbuton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
});