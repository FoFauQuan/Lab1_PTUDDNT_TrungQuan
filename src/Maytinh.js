import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Appearance } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Maytinh = () => {
  const [expression, setExpression] = useState('');
  const [theme, setTheme] = useState(Appearance.getColorScheme() || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handlePress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };
  const handleDelete = () => {
    setExpression(prevExpression => prevExpression.slice(0, -1));
  };

  const clearExpression = () => {
    setExpression('');
  };

  const themeStyles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
        <TouchableOpacity style={[styles.button, themeStyles.button,]} onPress={toggleTheme}>
          {/* <Text style={styles.buttonText}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Text> */}
          <MaterialIcons name={theme === 'light' ? 'light-mode' : 'dark-mode'} size={60} color="#fff" />
        </TouchableOpacity>
      <Text style={[styles.expressionText, themeStyles.expressionText]}>{expression}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.ACButton, themeStyles.button,]} onPress={clearExpression}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handleDelete()}>
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, themeStyles.button]} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.zeroButton, themeStyles.button]} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.zeroButton, themeStyles.button]} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  expressionText: {
    color: '#000000',
  },
  button: {
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  expressionText: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#383838',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
  },
  expressionText: {
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  zeroButton: {
    flex: 0.5,
  },
  ACButton: {
    flex: 0.9,
    
  },
});

export default Maytinh;
