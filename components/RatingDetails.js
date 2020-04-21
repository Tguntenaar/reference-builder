import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const RatingDetails = ({onViewDetails, }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.image} source={require('../assets/images/boris-guntenaar.jpeg')}/>
      </View>
      <View style={styles.right}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Boris Guntenaar</Text>
            <Text style={styles.jobTitle}>Owner</Text>
          </View>
          <LinearGradient
            colors={['rgb(10,185,255)', 'rgb(10,19,255)']}
            style={styles.gradeBox}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.5 }}>
            <Text style={styles.grade}>9.5</Text>
          </LinearGradient>
        </View>
        
        <Text style={styles.description}>This is my comment on this skill. You did a great job.</Text>
        <Button
            onPress={onViewDetails}
            title="view details"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.viewDetails}
          />
      </View>
    </View>
  )
}

export default RatingDetails
const imageSize = 70;
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: 180,
    paddingTop:20,
    borderBottomWidth:1,
    borderBottomColor:'rgb(236,236,236)',
    // flex:1,
    // alignItems:'center',
  },
  left:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0.3,
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize/2,
  },
  right:{
    flex: 0.7,
  },
  header:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  name:{
    fontFamily: 'CooperHewitt-Heavy',
    fontSize: 20,
  },
  jobTitle:{
    fontFamily: 'CooperHewitt-BookItalic',

  },
  gradeBox:{
    width: 51,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:20,
    borderRadius:2,
  },
  grade:{
    color:'#fff',
    fontFamily: 'Montserrat-Black',
  },
  description:{
    fontFamily: 'SourceSansPro-Regular',
    paddingRight: 20,
    paddingTop: 20,
  },
  viewDetails:{
    fontFamily: 'CooperHewitt-Book',
    marginTop:20,
  },

})
