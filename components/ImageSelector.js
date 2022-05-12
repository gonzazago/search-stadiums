import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons';
import { Alert, Image, StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = props => {
    const {handleImage} = props
    const [ pickerURI, setPickerURI ] = useState();
    const verifyPermissions = async () =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync();

        console.log(status);
        if(status !== 'granted'){
            Alert.alert('Permisos Insuficientes',
            'Necesita dar permisos de la camara para usar la aplicacion.', 
            [{text: 'Ok'}]
            )
            return false;
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOK = await verifyPermissions();
        if(!isCameraOK) return;

        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        })
        setPickerURI(image.uri)
        handleImage(image.uri);
    }


  return (
    <TouchableOpacity 
        style={styles.takeImage}
        onPress={handlerTakeImage}>
        <Feather style={styles.iconCamera} name="camera" size={48} color="white" />
    </TouchableOpacity>
    
  )
}

ImageSelector.propTypes = {
}

const styles = StyleSheet.create({
    takeImage:{
        width: 103,
        height: 93,
        backgroundColor:'#258A4E',
        borderRadius:10,
        margin:'auto'
    },
    iconCamera:{
        alignSelf:'center',
        top:22
    }
})
export default ImageSelector