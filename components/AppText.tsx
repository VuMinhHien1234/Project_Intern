import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    color: string
    fontSize: number
    children: any
}

const AppText = ({color, fontSize, children}: Props) => {
  return (
    <View>
      <Text style={{
        color: color,
        fontSize: fontSize
      }}>{children}</Text>
    </View>
  )
}

export default AppText

const styles = StyleSheet.create({})