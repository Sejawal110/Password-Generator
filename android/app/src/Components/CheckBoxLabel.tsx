import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function CheckBoxLabel(props: any) {

  return <Text style={styles.checkboxLabel}>{props.text}</Text>;  
}

const styles = StyleSheet.create({
    checkboxLabel: {
        fontSize: 17,
        color: 'black'
      },
})