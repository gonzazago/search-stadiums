import React from 'react'
import { View,StyleSheet } from 'react-native'

const Form = (props) => {
  return (
    <View style={{...styles.containerButtons,...props.style}}>
        {props.children}
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    containerButtons:{
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection:'column',
        flexWrap:'wrap',
        height: 250,
        width: 298,
        top:20,
        borderRadius:3,
        elevation:5,
        padding: 30 
    },
})