import React,{useEffect} from 'react'
import Spinner from '../components/spinner';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { searchStadiumByIdAction } from '../store/actions/stadiums/stadiumActions';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Carrousel from '../components/carrousel';
import {Rating} from 'react-native-ratings';

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {        
      dispatch(searchStadiumByIdAction(id));
    });  
    return unsubscribe;      
  }, [navigation])
  
  const fetching = useSelector(state => state.stadiums.fetching);
  const stadium = useSelector(state => state.stadiums.stadium[0])
  
  return (
    !stadium ? 
      <Spinner hide={fetching} color={"rgba(37, 138, 78, 0.8)"}/> 
    :
    <View style={styles.container}>
        <View style={styles.headerDetailContainer}>
          <View style={styles.bannerContainer}>
            {stadium.images ?
            <Carrousel style={styles.carrousel} url={stadium.images[0].url} />
            :<View style={styles.carrousel}></View>
          }
            
              <TouchableOpacity style ={styles.likeContainer}>
                  <MaterialIcons style={styles.likeIcon} name="favorite-outline" size={24} color="white" />
              </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{stadium.name}</Text>
            </View>
            <View
            style={styles.rating}>
            <Rating
                type='custom' 
                  showRating={false}
                  onFinishRating={() => console.log('ACA')}
                  size= {20}
                  imageSize={30}
                  tintColor={'white'}
                  ratingBackgroundColor={'C4C4C4'}
                  ratingColor={'#258A4E'}
                  style={{ width:160}}
                />
            </View>
            <View style={styles.commentsContainer}>
              <Text style={styles.comments}>12 comentarios</Text>
            </View>  
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
    backgroundColor:'grey'
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
  },
  rating:{
    top:30,
    width: 193,
    height: 34,
  },
  commentsContainer:{
    width: 124,
    height: 24,
    left: 224,
  },
  comments:{
    position: 'absolute',
    width: 123,
    height: 23,
    left: 1,
    top: 1,
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#258A4E'
  }

})
export default DetailScreen