import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'


import Stadium from '../components/stadium';
import data from '../mocks/stadiums.json';

const SearchScreen = () => {
    const{stadiums} = data;
    
    const renderItem = (stadium)  => {
        console.log(stadium)
    return <Stadium stadium={stadium}/>}
  return (
        <View style={styles.container}>
            <FlatList
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
        height: "100%"
    },
    

})

export default SearchScreen