import { StyleSheet, Text, View } from "react-native"

const BT1 = () =>{
    return (
        <View style = {style.container}>
            <Text style = {style.text}>
                Hello,world!
            </Text>
        </View>
    )
}
export default BT1;

const style = StyleSheet.create({
    container:{
        width:200,
        height:200,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'aqua'
    },
    
    text:{
        fontSize:30,
        fontWeight:'bold',
        padding:20
    }
})