import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import styles from './style';
import NextButton from '../../components/NextButton';
import BackButton from '../../components/BackButton';
import EvaluationSlider from '../../components/EvaluationSlider';
import Circle from '../../components/Circle';
import withUser from '../../contexts/withUser';

// TODO: Performance van sliders..
function EvaluateScreen({ route, navigation, userContext }) {
  const {
    request: { user },
  } = route.params;
  // get the team
  const {
    teamsLink: {
      items: [{ team }],
    },
  } = userContext;
  // team Skills
  const {
    skills: { items: teamSkills },
  } = team;

  const copy = teamSkills.map((skill) => {
    return { ...skill, grade: 60 };
  });

  const [sliders, setSliders] = useState(copy);
  const [average, setAverage] = useState(6);
  // var average = 6
  const handleChange = (id, value) => {
    const temp = [...sliders];
    temp.map((slider) => {
      // FIXME: const?
      const withGrade = { ...slider };
      if (slider.id === id) {
        withGrade.grade = value;
      }
      return withGrade;
    });
    setSliders(temp);
    const sum = temp.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.grade;
    }, 0);
    const avg = String((sum / temp.length / 10).toFixed(0));
    setAverage(avg);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.top}>
          {/* A JSX comment  TODO: circle */}
          <Circle color="rgba(239,244,253,0.5)" />

          <BackButton style={styles.back} onPress={() => navigation.navigate('Tabs')} />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{user.name}</Text>
            <Text style={styles.headerDescription}>
              How would you rate {user.name} based on these skills?
            </Text>
          </View>
        </View>

        <View style={styles.middle}>
          {sliders.map((skill) => {
            return <EvaluationSlider key={skill.id} item={skill} onSliderChange={handleChange} />;
          })}
        </View>
        <View style={styles.bottom}>
          <NextButton
            style={styles.next}
            title="Next"
            onPress={() =>
              navigation.navigate('EvaluateCommentScreen', {
                skill: user.name,
                average,
                sliders,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

EvaluateScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      request: PropTypes.shape({
        user: PropTypes.object,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  userContext: PropTypes.object.isRequired,
};

export default withUser(EvaluateScreen);
