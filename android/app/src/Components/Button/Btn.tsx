import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Btn(props: any) {
  return  <TouchableOpacity  style={styles.button} onPress={props.onPress}>
  <Text style={styles.buttonText}>{props.text} </Text>
</TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 25,
    width: 140,
    height: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
})