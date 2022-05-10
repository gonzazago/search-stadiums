import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import StadiumNavigator from '../stadiums';
import AddStadiumScreen from '../../screen/addStadiumScreen';
const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator initialRouteName='Search' 
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: styles.tabBar,
    }}
    >
    <BottomTabs.Screen name='HomeTab' component={StadiumNavigator}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={styles.item}>
                    <MaterialCommunityIcons name="stadium" size={24} color="white" />
                    <Text style={styles.text}>Canchas</Text>
                </View>
            )
        }}
    />

    <BottomTabs.Screen name='AddTab' component={AddStadiumScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={styles.item}>
                    <Ionicons name="add-circle-outline" size={24} color="white" />
                    <Text style={styles.text}>Agregar Cancha</Text>
                </View>
            )
        }}
    />
</BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20, 
        borderRadius: 15,
        height: 60,
        backgroundColor:  "rgba(37, 138, 78, 0.89)",
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white'
    }
})

export default TabNavigator
