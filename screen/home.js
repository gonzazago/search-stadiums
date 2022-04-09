import React from 'react'
import { View, StyleSheet,ImageBackground, Text, TouchableOpacity } from 'react-native';
import image from '../assets/banner.png'
import Banner from '../components/Banner';
import ButtonForm from '../components/Button';
import Form from '../components/Form';
import colors from '../constanst/color';
const Home = ({navigation}) => {

    const handleOnPress = action => {
        navigation.navigate(action);
    }
  return (
    <View style={styles.container}>
        <Banner
        image={image}
        />
        <View style={styles.containerAction} >
            <Form style={styles.containerButtons}>
                <ButtonForm
                    style={styles.buttonLogin}
                    color={colors.primary}
                    title={'Registrarse'}
                    action={'SignUp'}
                    handleOnPress= {handleOnPress}
                />
                <View style={styles.separator} />
                <ButtonForm
                    style={styles.buttonRegister}
                    color={colors.primary}
                    title={'Login'}
                    action={'Login'}
                    handleOnPress= {handleOnPress}
                />
                <TouchableOpacity onPress={()=>{console.log('Olvido su contraseña')}}>
                    <Text  style={styles.text}> Haz Olvidado Tu contraseña</Text>
                </TouchableOpacity>
                
            </Form>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        minWidth: 300
    },
    containerAction:{
        backgroundColor:'#fff',
        position: 'absolute',
        flex: 2,
        flexDirection:'column',
        width: '100%',
        height: '60%',
        borderColor: '#fff',
        top:400 ,
        alignItems:'center'
    },
    separator: {
        height:20,
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      buttonLogin:{
        borderColor: colors.primary,
        backgroundColor: colors.white,
        color: colors.primary
      },
      text:{
        color: colors.primary,
        fontFamily: 'OpenSansBold'
      }
});
export default Home