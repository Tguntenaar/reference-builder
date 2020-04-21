import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import EvaluationSlider from '../components/EvaluationSlider';
import Circle from '../components/Circle';
import { SafeAreaView } from 'react-native-safe-area-context';


function EvaluateScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
    <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
        {/* A JSX comment  TODO: circle */}
          <Circle color={'rgba(239,244,253,0.5)'}/>

          <BackButton style={styles.back} onPress={() => navigation.navigate('Tabs')}/>
          <View style={styles.header}>
            <Text style={styles.skillName}>Creativity</Text>
            <Text style={styles.skillDescription}>lorem ipsum, bla, bla</Text>
          </View>
        </View>

        <View style={styles.middle}>
          <EvaluationSlider skill={"Creativity"}/>
          <EvaluationSlider skill={"Creativity"}/>
          <EvaluationSlider skill={"Creativity"}/>
        </View>
        <View style={styles.bottom}>
          <NextButton style={styles.next} title={"Next"} onPress={() => navigation.navigate('EvaluateCommentScreen')} />
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  safe:{
    flex: 1,
  },
  container: {
    flex:1,
    justifyContent: "space-between",
  },
  top: {
    flex: 0.2,
    // backgroundColor: 'grey',
  },
  middle: {
    flex: 0.6,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.15,
    // backgroundColor:'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
  },
  skillName: {
    fontSize:50,
    alignSelf: 'center',

  },
  skillDescription: {
    fontSize: 25,
    alignSelf: 'center',

  },
  next: {
  },
  back: {
    // marginLeft: 20,
  },
});


export default EvaluateScreen