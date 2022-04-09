import Home from './screen/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/loginScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

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
          screenOptions={{
            headerShown: false
          }}
           initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}



export default App;