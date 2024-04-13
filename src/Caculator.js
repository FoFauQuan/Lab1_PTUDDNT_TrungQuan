import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Calculator = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [expression, setExpression] = useState("");
    const [history, setHistory] = useState([]);

    const bColor = darkMode ? "#656C78" : "#f0f0f0";
    const bColorR = darkMode ? "#4576CE":"#A0C8F5";
    const bColorL = darkMode ?"#CD48B8":"#FAA9EE";

    const buttonLeft = [
        ["C", "Del"],
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0', '.'],
    ];
    const buttonRight = ["*", "/", "-", "+", '='];

    const myStyle = StyleSheet.create({
        container: {
            flex: 1,
        },
        containerResult: {
            flex: 1,
            backgroundColor: bColor,
        },
        containerButton: {
            flex: 2,
            flexDirection: 'row',
            backgroundColor: bColor,
        },
        containerLeft: {
            flex: 3,
            backgroundColor: bColor,
        },
        containerRight: {
            flex: 1,
            backgroundColor: bColorR,
        },
        button: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
        },
        buttonText: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        containerRow: {
            flex: 1,
            flexDirection: 'row',
            overflow: 'hidden', // Thêm thuộc tính này để ẩn nội dung vượt qua khung của containerRow
        },
        containerLight:{
            flex:0.9,
            justifyContent:"flex-start",
            marginHorizontal:10,
            marginTop:10
        },
        containerHistory:{
            flex:1.6,
            alignItems:'flex-end'
        },
        containerAnswer:{
            flex:1.5,
            alignItems:'flex-end'
        }
    });

    const handleButtonPress = (value) => {
        if (value === "C") {
            setExpression("");
        } else if (value === "Del") {
            setExpression(prevExpression => prevExpression.slice(0, -1));
        } else if (value === "=") {
            const result = eval(expression);
            setHistory([...history, `${expression} = ${result}`]);
            setExpression(result.toString());
        } else {
            setExpression(prevExpression => prevExpression + value);
        }
    };
     const clearAll = () => {
         setExpression("");
         setHistory([]);
     };
    const handleDelLongPress = () => {
        clearAll();
    };
    return (
        <View style={myStyle.container}>
            <View style={myStyle.containerResult}>
                <View style = {myStyle.containerLight}>
                <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
                    <MaterialIcons name={(darkMode) ? "light-mode" : "nightlight"} size={60} color={(darkMode)?"#ffffff":"#000000"} />
                </TouchableOpacity>
                </View>
                <View style = {myStyle.containerHistory}>
                <Text style={{ fontSize: 20, fontWeight: "bold", paddingHorizontal: 20 }}>History:</Text>
                {history.map((item, index) => (
                    <Text key={index} style={{ paddingHorizontal: 20 }}>{item}</Text>
                ))}
                </View>
                <View style ={myStyle.containerAnswer}>
                <Text style={{...myStyle.buttonText, fontSize:60} }>{expression}</Text>
                </View>
            </View>
            <View style={myStyle.containerButton}>
                <View style={myStyle.containerLeft}>
                    {
                        buttonLeft.map((item, index) =>
                            <View style={{ ...myStyle.containerRow, backgroundColor: (index == 0) ? bColorL : 'ghostWhite' }} key={index}>
                                {
                                    item.map((row, rowindex) =>
                                        <TouchableOpacity style={myStyle.button}
                                         key={rowindex} 
                                         onPress={() => handleButtonPress(row)}
                                         onLongPress={row ==="C" ? handleDelLongPress:null}
                                        >
                                            <Text style={myStyle.buttonText}>
                                                {row}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        )
                    }
                </View>
                <View style={myStyle.containerRight}>
                    {
                        buttonRight.map((row, rowindex) =>
                            <TouchableOpacity style={myStyle.button} key={rowindex} onPress={() => handleButtonPress(row)}>
                                <Text style={myStyle.buttonText}>
                                    {row}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </View>
    );
};

export default Calculator;
