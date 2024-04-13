import { StyleSheet, Text, View } from "react-native"


const Square = ({text,bgColor = 'aqua'}) =>(
    <View style ={[style.box,{backgroundColor:bgColor}]}>
        <Text>
            {text}
        </Text>
    </View>
)
const BT5 =()=>{
   return(
    <View style={style.container} >
        <Square text="Square 1"/>
        <Square text="Square 2" bgColor="pink"/>
        <Square text="Square 3" bgColor="#ff637c"/>
    </View>
   )
}
export default BT5;
const style = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'80%'
    },
    box:{
        width:100,
        height:100,
        justifyContent:'center',
        alignContent:'center',
        padding:20
    }
})