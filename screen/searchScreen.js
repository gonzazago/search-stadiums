import React, {useState,useEffect} from 'react'
import { FlatList, StyleSheet, View } from 'react-native'


import Stadium from '../components/stadium';
import data from '../mocks/stadiums.json';

const SearchScreen = props => {
    const [stadiums, setStadiums] = useState([])

    useEffect(() => {
       const  fethStadiums = () =>{
            setStadiums(data.stadiums)
        }
        fethStadiums();
    }, [stadiums])
    
    const renderItem = (stadium)  => {
    return <Stadium stadium={stadium}/>}
  return (
        <View style={styles.container}>
            <FlatList
            style={{marginBottom:80, height:'100%'}}
                data={stadiums}
                renderItem={renderItem}
                keyExtractor = {stadium => stadium.id}
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