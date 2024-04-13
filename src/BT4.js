import { useState } from "react"
import { Button, Text, View } from "react-native";


const BT4 =()=>{
    const [pressCount,setpressCount] = useState(0);
    return(
        <View
        style = {{
            marginTop :"20%"
        }}>
            <Text
            style ={{
                fontFamily:'blod',
                fontSize:25,
                backgroundColor : 'pink',
                
            }}>
                Ban da an : {[pressCount]} times
            </Text>
            <Button
            title={`Pressed ${pressCount} time(s) `}
            onPress={()=>setpressCount(pressCount+1)}
            />
        </View>

        
    )
}
export default BT4;