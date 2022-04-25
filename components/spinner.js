import React, {useState, useEffect} from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Spinner = ({hide, color}) => {
  const [show, setShow] = useState(true);
  useEffect(()=>{
    setShow(hide);
  },[hide])
  console.log('SHOW:',show)
  if (!show) return null;
  return (
    show  &&
    <View style={[styles.container, styles.horizontal]}>
         <ActivityIndicator size="large" color={color} />
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