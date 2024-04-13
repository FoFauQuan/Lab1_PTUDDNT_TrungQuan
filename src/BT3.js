import { Alert, Button, Text, View } from "react-native"
import { Header } from "react-native/Libraries/NewAppScreen";


const BT3 =()=>{
    return(
        <View
        style = {{
            marginHorizontal :"30%",
            }}>
            <View
            style = {{
                padding:"10%",
            }}>
                <Button

                title="Say hello"
                color='red'

                onPress={()=>Alert.alert('Hello!')}
                />
            </View>
            <View style = {{
                
            }}>
            <Button
                title="Say goodbye"
                color='green'
                onPress={()=>Alert.alert('Goodbye')}
                />
            </View>
        </View>
    )
}
export default BT3;