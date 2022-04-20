import React,{useState,useEffect} from 'react'
import data from '../mocks/stadiums.json';
import Spinner from '../components/spinner';
import { Text, View } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  
  const [isFetching, setIsFetching] = useState(true)
  const [stadium, setStadium] = useState({})
  const {id} = route.params;
  const {stadiums} = data;

  useEffect(() => {
      const fethStadium = () =>{
        console.log('UseEffect')
        console.log('Stadiums: ', stadiums)
        const response = stadiums.filter(s => s.id === id);
        console.log('Response: ', response.name)
        setStadium(response);
        setIsFetching(false)
      }
      setTimeout(()=>{fethStadium()},300)
  }, [id])

  return (
    isFetching ? 
      <Spinner/> 
    :
    <View>
      <Text>Stadium: {stadium.name}</Text>
    </View>
  )
}

DetailScreen.propTypes = {}

export default DetailScreen