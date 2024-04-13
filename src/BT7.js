import { useState } from "react"
import { Alert, Text, TextInput, View,TouchableOpacity, StyleSheet, Button } from "react-native"


const BT7 =()=>{
    const [name,setName] = useState("");
    const onPress =()=>{
        Alert.alert(`Hello ${name}`);
    }
    return(
        <View style = {style.contaniner}>
                <Text style={style.h2}>
                    What is your name ?
                </Text>
                <TextInput style = {style.input}
                onChangeText={setName}
                placeholder="Put your name"
                value={name}
                />

                <TouchableOpacity
                style ={style.button}
                onPress = {onPress}
                >
                    <Text style={style.buttontext}>
                        Say Hello
                    </Text>

                </TouchableOpacity>
        </View>
    )
}
export default BT7;

const style = StyleSheet.create({
    contaniner:{
        marginTop:'8%',
    },
    h2:{
        fontFamily:'bold',
        fontWeight:'bold',
        fontSize:20,
        padding:10
    },
    input:{
            height:50,
            padding:10,
            backgroundColor:'#C0C0C0'
    },
    button:{
        alignSelf:'center',
        padding:10
    },
    buttontext:{
        fontSize:20,
        color:'blue'
    }

})