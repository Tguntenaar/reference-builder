import React, { useState } from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import styles from './style';
import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import EvaluationSlider from '../../../components/EvaluationSlider';
import Circle from '../../../components/Circle';
import withUser from '../../../contexts/withUser';

const EvaluateSliders = ({ route, navigation, userContext }) => {
  const { evaluationRequest, manager } = route.params;
  const { user } = evaluationRequest;
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
  // add grade to every skill
  const copy = teamSkills
    .filter((skill) => skill.active && skill.forManager === manager)
    .map((skill) => {
      return { ...skill, grade: 60 };
    });

  const [sliders, setSliders] = useState(copy);
  const [average, setAverage] = useState(6);

  const handleChange = (id, value) => {
    let temp = [...sliders];
    temp = temp.map((slider) => {
      if (slider.id === id) {
        return { ...slider, grade: value };
      }
      return slider;
    });
    setSliders(temp);
    // Calc average
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
          <Circle color="rgba(239,244,253,0.5)" />

          <BackButton style={styles.back} onPress={() => navigation.goBack()} />
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
                evaluationRequest,
                username: user.name,
                average,
                sliders,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

EvaluateSliders.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      evaluationRequest: PropTypes.shape({
        user: PropTypes.object,
      }),
      manager: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  userContext: PropTypes.object.isRequired,
};

export default withUser(EvaluateSliders);
