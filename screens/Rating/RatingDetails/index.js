import React from 'react';
import { Text, View, StatusBar, Image, SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

/** Components */
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import Circle from '../../../components/Circle';

// Constants
import { imageEsther } from '../../../constants/Images';
import styles from './style';

function RatingSkillDetails({ navigation, route }) {
  const { evaluation } = route.params;
  const ratings = route.params.evaluation.ratings.items || [];
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          <Circle color="rgba(239,244,253,0.5)" />
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.header}>
            <Image style={styles.image} source={imageEsther} />
            <Text style={styles.name}>{evaluation.author.name}</Text>
            <Text style={styles.jobTitle}>{evaluation.author.jobTitle}</Text>
            <Text style={styles.skill}>Comment:</Text>
            <Text style={styles.skillDescription}>{evaluation.comment}</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <ScrollView style={styles.scroll}>
            {ratings.map(({ grade, id, skill }) => {
              console.log(id);
              return (
                <View key={id} style={styles.box}>
                  <View style={styles.left}>
                    <Text style={styles.skillPart}>{skill.name}</Text>
                    <Text style={styles.description}>{skill.description}</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.grade}>{grade}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          {
            //  <NextButton title="Next" onPress={() => navigation.navigate('Tabs')} />
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

RatingSkillDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string,
        jobTitle: PropTypes.string,
      }),
      skills: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default RatingSkillDetails;
