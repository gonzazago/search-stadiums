
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screen/home';
import Login from '../../screen/loginScreen';
import SignUpScreen from '../../screen/signUpScreen';
import SearchScreen from '../../screen/searchScreen';
import DetailScreen from '../../screen/detailScreen';


const Stack = createNativeStackNavigator();

const StadiumNavigator = () =>{
return(
    <Stack.Navigator
        initialRouteName="Search">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Search" component={SearchScreen} options={{
            title: 'Canchas',
            headerStyle:{
            backgroundColor:"#258A4E",
            },
            headerTintColor: '#fff',         
        }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{
            title: 'Canchas',
            headerStyle:{
                backgroundColor:"#258A4E",
            },
            headerTintColor: '#fff',         
        }} />
</Stack.Navigator>
)
}
export default StadiumNavigator;