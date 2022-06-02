import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import Separator from './separator';
import ButtonForm from './Button';
import { useNavigation } from '@react-navigation/native';

const Stadium = (props) => {
    const {stadium} = props;
    const navigation = useNavigation();
    const handleOnPress = (id) =>{
        navigation.navigate('Detail',{id})
        
    }
    const { id,name,address,location, description, price, images} = stadium.item
  return (
    <View style={styles.stadium}>
        <View style={styles.carrousel}>
            {images ?
            <ImageBackground source={{uri:images.url}} style={styles.image}></ImageBackground>
        :<View style={styles.image}></View>}
            
        </View>
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.distance}>{`${address} - ${location}`}</Text>
        </View>
        <TouchableOpacity style={styles.location}>
        <EvilIcons style={styles.location_text} name="location" size={24} color="#258a4e"/>
            <Text style={styles.location_text}> Ver Ubicacion</Text>
        </TouchableOpacity>

        <View style={styles.content}>
            <Text style={styles.text_content}>{description}
            </Text>
        <Separator/>
        </View>
        <View style={styles.bottom}>
            <View  style={styles.buttonPrice}>
                <View>
                    <Text style={styles.buttonPriceContent}>{price}</Text>
                </View>
            </View>
            <ButtonForm
                style={styles.buttonDetail}
                action='detail'
                handleOnPress={()=>handleOnPress(id)}
                key={id}
                textColor={'#258A4E'}
                title={'Detalle'}
            />
         </View>
    </View>
)};
const styles = StyleSheet.create({
    carrousel:{
        width: '100%',
        height: 153,
        backgroundColor:'#C4C4C4',
        borderRadius:8
    },
    stadium:{
        width: '95%',
        height: 400,
        backgroundColor:"#E4E4E4",
        flexDirection:'column',
        alignSelf:'center',
        top: 50,
        marginBottom:20,
        elevation:5,
    },
    title:{
        marginTop:10,
        position: 'absolute',
        width: 150,
        height: 16,
        top:20,
        fontFamily: 'OpenSansBold',
        fontSize:16,
        lineHeight:16,
        display: 'flex',
        color: '#258A4E',
        marginLeft: 20
    },
    location:{
        marginTop:10,
        flexDirection:'row',
        backgroundColor:  "rgba(37, 138, 78, 0.19)",
        height: 54,
        width: 150,
        left: 240,
        borderRadius:10,
        justifyContent:'center'
    },
    location_text:{
        color: "#258A4E",
        alignSelf:'center',
        top:2
    },
    image:{
        width: 'auto',
        height: 153
    },
    content:{
        width: 300,
        height: 42,
        display: 'flex',
        alignSelf:'center'
    },
    text_content:{
        top:10,
        fontFamily: 'OpenSans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 14,
        alignItems: 'center',
        color: '#6C964D'
    },
    bottom:{
        flexDirection:'row',
        justifyContent: 'space-between',
    
    },
    buttonDetail:{
        backgroundColor:'#FFFF',
        width: 118,
        height: 24,
        top: 30,
        right: 20,
        borderRadius:10,
        elevation:5,
        alignItems:'center'
    },
    buttonContent:{
        color: '#258A4E',
        textAlign:'center',
        width: 53,
        fontFamily: 'OpenSans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        top:5
    },
    buttonPrice:{
        backgroundColor:' rgba(37, 138, 78, 0.8);',
        width: 118,
        height: 24,
        top: 30,
        left: 28,
        borderRadius:10,
        elevation:5,
        alignItems:'center'
    },
    buttonPriceContent:{
        color: '#FFFF',
        textAlign:'center',
        width: 53,
        fontFamily: 'OpenSans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        top:5
    },
    locationContainer:{
        left:250,
        alignContent:'center',
        marginBottom:20


    },
    locationButon:{
        backgroundColor:  "rgba(37, 138, 78, 0.19)",
        height: 44,
        width: 118,
        borderRadius:10,
        color:'white',
        textAlign:'center',
        borderWidth:0
        
    }
})

export default Stadium