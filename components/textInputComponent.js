import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,TextInput} from 'react-native'

const TextInputComponent = props => {
    const {placeholder,keyboardType,maxLength, handleOnchange,multiline, style} = props
  return (
    <TextInput
    style={{...styles.input, ...style}}
    placeholder={placeholder}
    onChangeText={handleOnchange}
    maxLength={maxLength}
    keyboardType={keyboardType}
    multiline={multiline}/>
  )
}

const styles = StyleSheet.create({
    input:{
        alignSelf:'center',
        width: 250,
        height: 55,
        borderRadius:10,
        borderColor:"#258A4E",
        borderWidth: 1,
        padding: 15,
        marginTop:20,
    }
})
TextInputComponent.defaultProps={
    keyboardType:"default",
    maxLength: 200,
    multiline: false
}

TextInputComponent.propTypes = {
    placeholder: PropTypes.string,
    handleOnchange: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    maxLeng: PropTypes.number


}

export default TextInputComponent