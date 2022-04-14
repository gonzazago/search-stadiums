import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../constanst/color';

const Separator = props => {
  return (
    <View style={{...styles.separator, ...props.style}} />
  )
}
const styles = StyleSheet.create({
    separator: {
        height:20,
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

export default Separator