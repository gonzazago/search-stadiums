import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Spinner = ({show, color}) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
         <ActivityIndicator size="large" color="rgba(37, 138, 78, 0.8)" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
  
export default Spinner