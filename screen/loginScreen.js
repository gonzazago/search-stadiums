import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from 'react-native'  
import ButtonForm from '../components/Button';
import Form from '../components/Form';
import colors from '../constanst/color';


const  Login = () => {
  const [userName, setUserName]  = useState('')
  const [password, setPassword] = useState('')
  const handleUserName = (target) => {
   console.log( target)
  }
  return (
    <View style={styles.container}>

        <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.containerAction} >
           <Form style={styles.containerButtons}>
               <TextInput
                  autoCorrect={false}
                  onChangeText={handleUserName}
                  placeholder='Usuario'
                  value={userName}
               />
                <View style={styles.separator} />
                <TextInput
                  autoCorrect={false}
                  onChangeText={handleUserName}
                  placeholder='Usuario'
                  value={userName}
                  password={true}
               />
            </Form>
        </KeyboardAvoidingView>
        <View style={styles.containerSumit}>
        <ButtonForm
        style={styles.button}
        title='Iniciar Sesion'
        action='listStadiums'
        handleOnPress={ () => console.log(login)}/>
        </View>

    </View>
  );

}

const styles = StyleSheet.create({
 
  container: {
      width: '100%',
      height: '100%',
      minWidth: 300,
      backgroundColor: colors.primary,
  },
  containerAction:{
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
      flexDirection:'column',
      width: '100%',
      height: '30%',
  },
  separator: {
      height:20,
      width: '100%',
      borderBottomColor: colors.primary,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  containerButtons:{
    backgroundColor: colors.white,
    borderRadius:20
  },
  containerSumit:{
    bottom: 80,
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    borderColor: colors.primary,
    backgroundColor: colors.white,
    color: colors.primary,
  }
});

export default Login;