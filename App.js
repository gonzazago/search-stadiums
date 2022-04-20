import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';

const  App = () => {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!loaded) return <AppLoading/>
  return (
    <MainNavigator/>
  )
}



export default App;