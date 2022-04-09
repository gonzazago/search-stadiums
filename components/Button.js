import React from 'react'
import {Text,TouchableOpacity,StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ButtonForm = (props) => {
  const {title, handleOnPress, action }= props

  const onPress = action => {
    handleOnPress(action);
  }
  return (

      <TouchableOpacity
        style={{...styles.button,...props.style}}
        onPress={ () => onPress(action)}>
        <Text style={{...styles.text,...props.style}}>{title}</Text>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button:{
      alignItems:'center',
      justifyContent:'center',
      width: 250,
      borderRadius:10,
      height: 51,
      backgroundColor:'#6C964D',
      borderColor: '#ffff',
      borderWidth:1
  },
  text:{
    color: 'white',
    textAlign:'center'

  }

});


ButtonForm.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    handleOnPress: PropTypes.func.isRequired,
}

export default ButtonForm