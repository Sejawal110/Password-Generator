import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input(props: any) {
  return <TextInput
  style={styles.input}
  placeholder={props.placeholder}
  keyboardType={props.keyboardType}
  onChangeText={props.onChangeText}
  value={props.value}
  maxLength={2} 
/>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#3498db',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        width: '30%',
      
      },
})