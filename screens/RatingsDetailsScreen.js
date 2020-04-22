import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from 'react-native';
import BackButton from '../components/BackButton';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Circle from '../components/Circle';
import RatingDetails from '../components/RatingDetails';
import Chart from '../components/Chart';

// <SafeAreaView style={styles.safe}/>
function RatingsDetailsScreen({ navigation, grade }) {
  grade = grade || 8.1;
  return (
    <Fragment>
      <SafeAreaView style={styles.safe}/>
      <View style={styles.container} contentContainerStyle={styles.scroll}>
        <View style={styles.top}>
          <LinearGradient
              colors={['rgb(10,185,255)', 'rgb(10,19,255)']}
              style={styles.header} >

              <View style={styles.topNavigation}>
                <BackButton color={{backgroundColor:'#fff', iconColor:'rgb(44,44,44)'}} size={25} onPress={() => navigation.navigate('Tabs')}/>
                <Feather name={"settings"} color={"#fff"} 
                onPress={() => { navigation.navigate("SettingsScreen") }}
                style={styles.settingsIcon}/>
              </View>
              <View style={styles.middleNavigation}>
                <View style={styles.bigRing}>
                  <LinearGradient
                    colors={['rgba(10,185,255, 0.99)', 'rgb(10,19,255)']}
                    style={styles.mediumRing} >
                      <View style={styles.smallRing}>
                        <Text style={styles.grade}>{grade}</Text>
                      </View>
                  </LinearGradient>
                </View>
                <View style={styles.middleNavigationInner}>
                  <Text style={styles.skill} >Creativity</Text>
                  <Text style={styles.skillDescription}>new ideas, out of the box</Text>
                </View>
              </View>
              <Circle/>
          </LinearGradient>
        </View>

        <View style={styles.middle}>
          <View style={styles.chart}>
            <Chart/>
          </View>
        </View>
        <View style={styles.bottom}>
        <ScrollView>
        <Text style={styles.date}>October 2019</Text>

          <RatingDetails onViewDetails={() => navigation.navigate('DetailedRatingScreen')}/>
          <RatingDetails onViewDetails={() => navigation.navigate('DetailedRatingScreen')}/>
          <RatingDetails onViewDetails={() => navigation.navigate('DetailedRatingScreen')}/>
          <RatingDetails onViewDetails={() => navigation.navigate('DetailedRatingScreen')}/>
        </ScrollView>
        </View>
      </View>
      {/** 
      
        <SafeAreaView style={styles.safe2}/>
      */}
    </Fragment>
  )
}
// <SafeAreaView style={styles.safe2}/>

const width = Dimensions.get('window').width;
const circleSize = 70;
const mediumRingSize = circleSize + 10;
const bigRingSize = mediumRingSize + 10;

const styles = StyleSheet.create({
  safe: {
    flex: 0,
    paddingTop: 0,
    backgroundColor: 'rgb(10,185,255)',
  },
  safe2: {
    flex: 0,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: width,
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  top: {
    flex: 0.25,
    backgroundColor: 'rgb(10,19,255)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: width,
  },
  header:{
    flex:1,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  middle: {
    flex: 0.25,
    top: -40,
   
  },
  chart:{
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: width,
    // position: 'absolute',
    // top: 150,
  },
  date: {
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    fontFamily:'SourceSansPro-Regular',
    color:'rgb(10,19,255)',
    marginLeft:10,
  },
  bottom: {
    flex: 0.4,
  },
  bigRing: {
    backgroundColor: '#fff',
    height: bigRingSize,
    width: bigRingSize,
    borderRadius: bigRingSize/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumRing: {
    backgroundColor: 'white',
    height: mediumRingSize,
    width: mediumRingSize,
    borderRadius: mediumRingSize/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallRing: {
    backgroundColor: '#fff',
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grade: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'CooperHewitt-Heavy',
    paddingTop: 2,
    height:25,
  },
  skill:{
    color: "#fff",
    fontSize: 24,
    fontFamily: 'CooperHewitt-Heavy',
  },
  skillDescription:{
    color: "#fff",
    fontSize: 16,
    fontFamily: 'SourceSansPro-It',

  },
  topNavigation: {
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  middleNavigation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 21,
    // paddingTop: 21,
  },
  middleNavigationInner: {
    marginLeft: 20,
    marginTop: 20,
  },
  settingsIcon: {
    fontSize: 25,
    marginTop:10,
    marginRight:15,
  }
});


export default RatingsDetailsScreen