import Home from './screen/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/loginScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SignUpScreen from './screen/signUpScreen';
import SearchScreen from './screen/searchScreen';

const  App = () => {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!loaded) return <AppLoading/>
  return (
    
      <NavigationContainer>
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
      </Stack.Navigator>
      </NavigationContainer>
  )
}



export default App;