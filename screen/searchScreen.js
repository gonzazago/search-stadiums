import React, {useState,useEffect} from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { searchStadiumsAction } from '../store/actions/stadiums/stadiumActions';
import Stadium from '../components/stadium';
import Spinner from '../components/spinner';

const SearchScreen = props => {
    const dispatch = useDispatch();
    const {navigation} = props;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {        
          dispatch(searchStadiumsAction());
        });  
        return unsubscribe;      
      }, [navigation])
      
    

    
    const fetching = useSelector(state =>  state.stadiums.fetching);
    const stadiums = useSelector(state => state.stadiums.stadiums);
    const refresh = useSelector(state => state.stadiums.refresh);
    const renderItem = (stadium)  => {
    return <Stadium stadium={stadium}/>}
  return (
    
        fetching ? 
        <Spinner hide={fetching} color={"rgba(37, 138, 78, 0.8)"}/> 
        :
        <View style={styles.container}>
            <FlatList
                style={{marginBottom:80, height:'100%'}}
                data={stadiums}
                renderItem={renderItem}
                keyExtractor = {stadium => stadium.id}
                refreshing={refresh}
            />
        </View>

  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF9F9",
        width: "100%",
        height: "100%",
        
    },
    

})

export default SearchScreen