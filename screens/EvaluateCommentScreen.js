import React, { Fragment } from 'react'

import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import CommentInput from '../components/CommentInput';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

//https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
export default function EvaluateCommentScreen({navigation}) {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeTop}/>
          <StatusBar barStyle="light-content" />
          <View style={styles.topContainer}>
            <LinearGradient
              colors={['rgba(10,185,255, 0.99)', 'rgb(10,19,255)']}
              style={styles.linearGradient}
            />
            <View style={styles.container}>
              <View style={styles.top}>
                <BackButton color={{backgroundColor:'#fff', iconColor:'rgb(44,44,44)'}} onPress={() => navigation.navigate('EvaluateScreen')}/>
                <View styles={styles.header}>
                  <Text style={[styles.text, {fontSize: 26}]}>Creativity</Text>
                  <Text style={[styles.text, {fontSize: 18}]}>Your avgerage</Text>
                  <Text style={[styles.text, {fontSize: 60}]}>8</Text>
                </View>
              </View>
              <ScrollView style={styles.middle} contentContainerStyle={{flexGrow: 1,alignItems: 'center',
              justifyContent: 'center',}}>
                <Text style={[styles.text, {fontSize: 20}]}>Any feedback?</Text>
                <CommentInput/>
              </ScrollView>
              <View style={styles.bottom}>
                <NextButton title={"Next"} color={{backgroundColor: '#fff', textColor: 'rgb(44,44,44)'}} onPress={() => navigation.navigate('Tabs')} />
              </View>
            </View>
          </View>
          <SafeAreaView style={styles.safe}/>
      </Fragment>
    )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeTop:{
    backgroundColor: 'rgb(10,185,255)',
    flex: 0,
  },
  safe:{
    flex: 0,
    backgroundColor: 'rgb(10,19,255)',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'rgb(10,19,255)',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height/2,
  },
  container: {
    // flex: 1,
    // width:width,
    justifyContent: 'space-between',
  },
  top: {
    flex: 0.2,
    // flexDirection: 'row',
    width:width,

  },
  middle: {
    flex: 0.6,
    
  },
  bottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
  },
  header: {
    alignSelf: 'center',
  },
});
