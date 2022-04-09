import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

const Banner = props => {

    const {image, style } = props;
  return (
    <View style={{...styles.containerImage, ...style}}> 
            <ImageBackground source={image} style={styles.image}></ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    containerImage:{
        backgroundColor:'#6C964D',
        flex: 1,
        width: '100%',
        height: '50%',
        borderColor:'#eee',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        height: 500,
        top: -100
      }
});
export default Banner