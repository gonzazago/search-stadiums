import React,{useState}from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { uploadFile } from '../services/storageClient';


const CameraComponent = ({handleImage}) => {

const [ pickerURI, setPickerURI ] = useState();

const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if(status !== 'granted') {
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

    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.8
    })
    const url  = await uploadFile(image.uri);
    setPickerURI(image.uri);
    handleImage(url);
}

    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.takeImage}
                onPress={handlerTakeImage}>
                    <Entypo
                    style={styles.iconCamera}
                     name="camera" size={48} color="#258A4E" />
                </TouchableOpacity>
        </View>
        
  )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    takeImage:{
        width: 103,
        height: 93,
        backgroundColor:'#fff',
        borderRadius:10,
        margin:'auto'
    },
    iconCamera:{
        alignSelf:'center',
        top:22
    }
})
export default CameraComponent