import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';

export default function CheckBoxx(props: any) {
  return  <CheckBox
  value={props.value}
  onValueChange={props.onValueChange}
/>
}

const styles = StyleSheet.create({})