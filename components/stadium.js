import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Separator from './separator';

const Stadium = (props) => {
    const {stadium} = props;
    const { name, distance, description, price, images} = stadium.item
    console.log('Stadium: ',stadium);

  return (
    <View style={styles.stadium}>
        <View style={styles.carrousel}>
            <ImageBackground source={{uri:images[0].url}} style={styles.image}></ImageBackground>
        </View>
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.distance}>{`A ${distance} mts de Distancia`}</Text>
        </View>

        <TouchableOpacity style={styles.location}>
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
                <TouchableOpacity style={styles.buttonDetail}>
                    <Text style={styles.buttonContent}> Detalle</Text>
                </TouchableOpacity>
         </View>
    </View>
)}
const styles = StyleSheet.create({
    carrousel:{
        width: '100%',
        height: 153,
        backgroundColor:'#C4C4C4',
        borderRadius:8
    },
    stadium:{
        width: '95%',
        height: 350,
        backgroundColor:"#E4E4E4",
        flexDirection:'column',
        alignSelf:'center',
        top: 50,
        marginBottom:20,
        elevation:5,
    },
    title:{
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
    distance:{
        width: 200,
        height: 17,
        color: '#258A4E',
        top:35,
        marginLeft: 20,
        fontFamily: 'OpenSansBold',
        fontSize:12       
    },
    location:{
        backgroundColor:  "rgba(37, 138, 78, 0.19)",
        height: 44,
        width: 118,
        left: 250,
        borderRadius:10,
        alignItems:'center'
    },
    location_text:{
        color: "#258A4E",
        alignItems:'baseline',
        top:8
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
        justifyContent: 'space-between'
    
    },
    buttonDetail:{
        backgroundColor:'#FFFF',
        width: 118,
        height: 24,
        top: 30,
        right: 40,
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
    }
})

export default Stadium