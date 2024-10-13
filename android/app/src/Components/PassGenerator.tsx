import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CheckBoxLabel from './CheckBoxLabel';
import CheckBoxx from './CheckBoxx';
import Btn from './Button/Btn';
import Input from './Input';

const PassGenerator = () => {
  const [password, setPassword] = useState('');

  const [passwordLength, setPasswordLength] = useState(''); 
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);


  const generatePassword = () => {
    const length = parseInt(passwordLength, 10);

    if (isNaN(length) || length < 1 ) {
      Alert.alert("Invalid Length", "Please enter a valid number for the password length.");
      return;
    }

   

    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    if (chars.length === 0) {
      Alert.alert("Selection Error", "Please select at least one character set.");
      return;
    } 

    

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.round(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };


  const resetPassword = () => {
    setPassword('');
    setPasswordLength('');
    setIncludeUppercase(false);
    setIncludeLowercase(false);
    setIncludeSymbols(false);
    setIncludeNumbers(false);

  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Generator</Text>
      

      <View style={styles.inputContainer}>
      <Text style={styles.label}>Password Length</Text>
      <Input placeholder="Ex. 10" keyboardType="Numeric" value={passwordLength} onChangeText={setPasswordLength}  />

      </View>
      

      <View style={styles.checkboxContainer}>
      <CheckBoxLabel text="Include UpperCase" />
       <CheckBoxx value={includeUppercase} onValueChange={setIncludeUppercase} />
        
      </View>

      <View style={styles.checkboxContainer}>
      <CheckBoxLabel text="Include LowerCase" />
      <CheckBoxx value={includeLowercase} onValueChange={setIncludeLowercase} />
        
      </View>

      <View style={styles.checkboxContainer}>
      <CheckBoxLabel text="Include Numbers" />
      <CheckBoxx value={includeNumbers} onValueChange={setIncludeNumbers} />
       
      </View>

      <View style={styles.checkboxContainer}>
      <CheckBoxLabel text="Include Symbols" />
      <CheckBoxx value={includeSymbols} onValueChange={setIncludeSymbols} />
        
      </View>
      
      <View style={styles.btnContainer}>
        <Btn text="Generate" onPress={generatePassword} />
        <Btn text="Reset" onPress={resetPassword} />
      </View>

      

      

      {password ? (

<View style={[styles.card, styles.cardElevated]}>
  <Text style={styles.generatedPassword}> Generated Password:   </Text>
        <Text numberOfLines={2} style={styles.generatedPassword}> {password}</Text>
        </View>
      ) : null}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  label: {
    fontSize: 18,
    color: 'black'

  },
  
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  
  generatedPassword: {
    marginTop: 28,
    fontSize: 18,
 textAlign: 'center',
 color: 'black'
  },

  checkboxContainerr: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  card: {
    
    width: 320,
    height: 130,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 20,
    marginTop: 30
    
  },

  cardElevated: {
    backgroundColor: '#fff',
    elevation: 3,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },



})

export default PassGenerator;