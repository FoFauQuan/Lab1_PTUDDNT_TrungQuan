import { ScrollView,View,Text,StyleSheet, Animated } from "react-native";

const Square = ({text,bgColor = 'aqua'}) =>(
    <View style ={[style.box,{backgroundColor: bgColor}]}>
        <Text>
            {text}
        </Text>
    </View>
);
const data =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const BT6 =() => {
    return(
        <ScrollView style ={style.container}>
            {data.map((item, index)=>(
            <Square key={item} text={` Square ${index + 1} `}/>
            
        ))}
        </ScrollView>
    )
}
export default BT6;
const style = StyleSheet.create({
    container:{
        backgroundColor:'pink',
    },
    box:{
        width:110,
        height:100,
        justifyContent:'center',
        alignContent:'center',
        margin:20,
        padding:20
    }
})