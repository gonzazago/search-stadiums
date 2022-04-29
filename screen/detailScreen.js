import React,{useEffect} from 'react'
import Spinner from '../components/spinner';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { searchStadiumByIdAction, searchStadiumsAction } from '../store/actions/stadiums/stadiumActions';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Carrousel from '../components/carrousel';
import {Rating} from 'react-native-ratings';

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {id} = route.params;

  
  const fetching = useSelector(state => state.stadiums.fetching);
  const stadium = useSelector(state =>{
    console.log('STATE:', state)
    return state.stadiums.stadium[0];
  })

  
  useEffect(() => {
    console.log('useEffect')
    dispatch(searchStadiumByIdAction(id))
  }, [navigation])

  return (
    fetching ? 
      <Spinner hide={fetching} color={"rgba(37, 138, 78, 0.8)"}/> 
    :
    <View style={styles.container}>
        <View style={styles.headerDetailContainer}>
          <View style={styles.bannerContainer}>
            <Carrousel style={styles.carrousel} url={stadium.images[0].url} />
              <TouchableOpacity style ={styles.likeContainer}>
                  <MaterialIcons style={styles.likeIcon} name="favorite-outline" size={24} color="white" />
              </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{stadium.name}</Text>
            </View>
                            <Rating
                  showRating
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                />
          </View>

        </View>
        <View style={styles.locationContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: '95%',
    width: '100%',
    display: 'flex'
  },
  headerDetailContainer:{
    backgroundColor:'red',
    height: '50%',
  },
  bannerContainer:{
    height: '60%'
  },
  carrousel:{
    height: '100%',
    backgroundColor:'red'
  },
  descriptionContainer:{
    borderWidth:1,
    height: '40%',
    backgroundColor:'white',
  },
  locationContainer:{
    backgroundColor:' rgba(158, 203, 176, 0.41);',
    height: '50%',
  },
  likeContainer:{
    backgroundColor: '#258A4E',
    width: 66,
    position: 'absolute',
    height: 63,
    left: 320,
    top:150,
    borderRadius: 90,
    elevation:5,
  },
  likeIcon:{
    position: 'absolute',
    alignSelf:'center',
    top:18
  },
  nameContainer:{
    width: 224,
    height: 43,
    left: 0,
    
  },
  name:{
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#258A4E',
    padding: 10,
    marginRight:20

  }

})
export default DetailScreen