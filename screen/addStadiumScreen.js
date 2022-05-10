 import React,{useState} from 'react'
import {View,ScrollView, StyleSheet, Text,TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import TextInputComponent from '../components/textInputComponent';
import {  } from 'react-native-web';


const AddStadiumScreen = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [location, setDescription] = useState('')
    const [images, setImages] = useState([]);
  return (
    <View style={styles.container}>
        <TextInputComponent
            placeholder='Nombre de la Cancha'
            handleOnchange={setName}
        />
        <TextInputComponent
            placeholder='Precio'
            handleOnchange={setName}
            keyboardType="numeric"
        />
        <Text style={styles.textImage}>Cargar Imagenes</Text>
        <View style={styles.imagesContainer}>
            <TouchableOpacity style={styles.takeImage}>
                  <Feather style={styles.iconCamera} name="camera" size={48} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.takeGalery}>
                     <MaterialIcons style={styles.iconCamera} name="photo" size={48} color="#258A4E" />
            </TouchableOpacity>
        </View>
        
    </View>
    
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
        elevation:0.4
    },
    textImage:{
        alignSelf:'center',
        marginTop:30,
        fontSize:24,
        color:'#258A4E',
        fontFamily: 'OpenSansBold',
        
    },
    takeImage:{
        width: 103,
        height: 93,
        backgroundColor:'#258A4E',
        borderRadius:10,
        margin:'auto'
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
        flexDirection:'row',
        justifyContent:'space-between',
        top: 50,
        alignSelf:'center'
    },
    iconCamera:{
        alignSelf:'center',
        top:22
    }
})
export default AddStadiumScreen