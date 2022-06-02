import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Alert, StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { uploadFile } from '../services/storageClient';

const ImageSelector = props => {
    const {handleImage} = props
    const [ progress, setProgress ] = useState('');
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

        const urlImage = await uploadFile(image.uri);
        
        setProgress(urlImage)
        handleImage(urlImage);
    }


  return (
    <TouchableOpacity 
        style={styles.takeImage}
        onPress={handlerTakeImage}>
        <MaterialIcons style={styles.iconCamera} name="photo" size={48} color="white" />
        <Text style = {styles.progres}>Progress: {progress}</Text>
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
        margin:'auto',
        marginRight:40
    },
    iconCamera:{
        alignSelf:'center',
        top:22
    },
    progres:{
        top:50,
    }
})
export default ImageSelector