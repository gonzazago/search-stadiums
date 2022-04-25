import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';

const  App = () => {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!loaded) return <AppLoading/>
  return (
    <Provider store={store}>
        <MainNavigator/>
    </Provider>

  )
}



export default App;