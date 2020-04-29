import React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

/** Components */
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import Circle from '../components/Circle';

function DetailedRatingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <Circle color={'rgba(239,244,253,0.5)'}/>
          <BackButton onPress={() => navigation.navigate('RatingsDetailsScreen')}/>
          <View style={styles.header}>
            <Image style={styles.image} source={require('../assets/images/boris-guntenaar.jpeg')}/>
            <Text style={styles.name}>Boris Guntenaar</Text>
            <Text style={styles.jobTitle}>Owner FlexInHouse</Text>
            <Text style={styles.skill}>Creativity</Text>
            <Text style={styles.skillDescription}>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.</Text>
          </View>
        </View>
        <View style={styles.middle}>
          {/* TODO: maybe in component? */}
          <ScrollView style={styles.scroll}>
            <View style={styles.box}>
              <View style={styles.left}>
                <Text style={styles.skillPart}>Out of the Box</Text>
                <Text style={styles.description}>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. </Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.grade}>3</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.left}>
                <Text style={styles.skillPart}>Visual Skills</Text>
                <Text style={styles.description}>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. </Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.grade}>8</Text>
              </View>
            </View>
            <View style={styles.box}>
              <View style={styles.left}>
                <Text style={styles.skillPart}>Ideas</Text>
                <Text style={styles.description}>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. </Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.grade}>6</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <NextButton title={"Next"} onPress={() => navigation.navigate('Tabs')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const width = Dimensions.get('window').width;
const ImageSize = 80;
const ImagePosition = -40;
const styles = StyleSheet.create({
  safe:{
    flex:1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  top: {
    flex: 0.4,
    // backgroundColor: 'red',
  },
  header:{
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  image:{
    height:ImageSize,
    width:ImageSize,
    borderRadius: ImageSize/2,
    top: ImagePosition,
  },
  name:{
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
    height: 20,
    padding: 1,
    top: ImagePosition + 10,

  },
  jobTitle:{
    fontFamily: 'CooperHewitt-BookItalic',
    color: 'rgba(44,44,44,0.75)',
    fontSize: 14,
    height: 14,
    padding: 1,
    top: ImagePosition + 10,
  },
  skill:{
    fontFamily: 'CooperHewitt-Heavy',
    color: 'rgb(10,19,255)',
    fontSize: 24,
    height: 24,
    padding: 2,
  },
  skillDescription:{
    color: 'rgb(118,118,118)',
    fontSize: 16,
    height: 4 * 16,
    width: width - (2 * 56),
    padding: 1,
    textAlign: "center",
  },
  middle: {
    flex: 0.5,
    // backgroundColor: 'grey',
    alignItems: 'center',
  },
  box:{
    marginBottom: 34,
    flexDirection: 'row',
  },
  left:{
    width: width * 0.8,
    paddingLeft: 20,
  },
  right:{
    width: width * 0.2,
    alignItems: 'flex-end',
  },
  skillPart:{
    fontFamily: 'CooperHewitt-Medium',
    fontSize: 20,
    height: 20,
    padding: 2,
  },
  grade:{
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 30,
    height: 30,
    padding: 2,
    width: 30,
    // alignSelf: 'flex-end',
  },
  description:{
    fontFamily: 'SourceSansPro-It',
  },
  scroll:{
    flexGrow: 1,
  },
  bottom: {
    flex: 0.1,
    alignItems: 'center',
  },
});

export default DetailedRatingScreen
