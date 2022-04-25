import React,{useState,useEffect} from 'react'
import Spinner from '../components/spinner';
import { Text, View } from 'react-native';
import { searchStadiumByIdAction } from '../store/actions/stadiums/stadiumActions';
import { useDispatch, useSelector } from 'react-redux';

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {id} = route.params;

  useEffect(() => {
      const fetchStadium = () => dispatch(searchStadiumByIdAction(id));
      fetchStadium();
  }, [])
  
  const fetching = useSelector(state =>  state.stadiums.fetching);
  const stadium = useSelector(state => state.stadiums.stadium);
  console.log('STADIUM: ', stadium)


  return (
    fetching ? 
      <Spinner/> 
    :
    <View>
      <Text>Stadium: {stadium.name}</Text>
    </View>
  )
}

DetailScreen.propTypes = {}

export default DetailScreen