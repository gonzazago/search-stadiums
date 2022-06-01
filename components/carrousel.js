import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View,ImageBackground,TouchableOpacity } from 'react-native'


const Carrousel = ({url, style}) => {
  return (
    <View style={{...styles.carrousel, ...style.carrousel}}>
        <ImageBackground source={{uri:url}} style={{...styles.image,...style.image}}></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    carrousel:{
        width: '100%',
        height: '100%',
        backgroundColor:'#C4C4C4',
        borderRadius:8
    },
    image:{
        width: 'auto',
        height: '100%'
    },

})
Carrousel.propTypes = {
    url: PropTypes.string.isRequired
}



export default Carrousel