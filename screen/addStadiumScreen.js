 import React,{useState} from 'react'
import {View, StyleSheet, Text,TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import { useDispatch } from 'react-redux';
import { addStadiumAction } from '../store/actions/stadiums/stadiumActions';
import { v4 as uuidv4 } from 'uuid';

import TextInputComponent from '../components/textInputComponent';
import ImageSelector from '../components/ImageSelector';
import CameraComponent from '../components/cameraComponent';
import 'react-native-get-random-values'
import { useNavigation } from '@react-navigation/native';


const AddStadiumScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([])

    const handleImages = img=>{
        setImages([...images,img]);
    }
    const saveStadium = ()=>{
        const stadium ={ 
            id: uuidv4(),
            name,
            location,
            address,
            price,
            images
        }
        console.log({stadium:stadium})
        dispatch(addStadiumAction({stadium:stadium}))
        navigation.navigate('Search')
    }

  return (
      <ScrollView style={styles.container} >
         <KeyboardAvoidingView
           behavior={Platform.OS === "ios" ? "padding" : "height"}
           style={styles.containerAction} >
              <TextInputComponent
              placeholder='Nombre de la Cancha'
              handleOnchange={setName}
          />
          <TextInputComponent
              placeholder='Precio'
              handleOnchange={setPrice}
              keyboardType="numeric"
          />
          <TextInputComponent
              placeholder='Localidad'
              handleOnchange={setLocation}
          />
          <TextInputComponent
              placeholder='Direccion'
              handleOnchange={setAddress}
          />
          <Text style={styles.textImage}>Cargar Imagenes</Text>
          <View style={styles.imagesContainer}>
              <ImageSelector handleImage={handleImages}/>
              <CameraComponent handleImage={handleImages}/>
              {images.length==0 ?
              <Text style={styles.imagesInfo}>No hay Imagen cargada</Text>
              :
              <Text style={styles.imagesInfo}>Imagenes Seleccionadas: {images.length}</Text>
              }
          </View>
  
          <TouchableOpacity style={styles.addButton} onPress={saveStadium}>
              <Text style={styles.addButtonText}>Guardar Cancha</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        width: 350,
        height: '80%',
        left: 30,
        top: 70,
        margin:'auto',
        borderRadius:10,
        flex: 1
    },
    textImage:{
        alignSelf:'center',
        marginTop:30,
        fontSize:24,
        color:'#258A4E',
        fontFamily: 'OpenSansBold',
        
    },
    takeGalery:{
        width: 103,
        height: 93,
        left: 15,
        borderWidth:1,
        borderColor:'#258A4E',
        backgroundColor:'#fff',
        borderRadius:10
    },
    imagesContainer:{
        width: 250,
        height: 100,
        flexDirection:'row',
        justifyContent:'space-between',
        top: 50,
        alignSelf:'center',
        marginBottom:150
    },
    iconCamera:{
        alignSelf:'center',
        top:22
    },
    image: {
        width: 100,
        height: 100,    
        marginRight: 10
    },
    imagesInfo:{
        width: 169,
        height: 32,
        right:195,
        justifyContent:'center',
        fontFamily: 'OpenSansBold',
        fontStyle: 'normal',
        top:150,
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        alignItems: 'center',
        textAlign: 'center',
        color: '#258A4E'
    },
    addButton:{
        width: 259,
        height: 38,
        alignSelf:'center',
        backgroundColor: '#258A4E'
    },
    addButtonText:{
        position: 'absolute',
        width: 200,
        height: 30,
        left: 25 ,
        top: 10,
        fontFamily: 'OpenSansBold',
        fontStyle: 'normal',
        //fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF'
    }
})
export default AddStadiumScreen