import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import styles from './style';

import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import CommentInput from '../../../components/CommentInput';
import api from '../../../apiwrapper';
import withUser from '../../../contexts/withUser';

// https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
function EvaluateCommentScreen({ userContext, navigation, route }) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState({ loading: false, errored: false });
  const { username, average, sliders, evaluationRequest } = route.params;
  const handleText = (txt) => {
    setText(txt);
  };
  const uploadEvaluation = async () => {
    setStatus({ ...status, loading: true });
    const rating = {
      userId: evaluationRequest.user.id,
      authorId: evaluationRequest.evaluator.id,
      comment: text,
      group: userContext.group,
    };
    console.log(rating);
    console.log(evaluationRequest.evaluator.name);
    console.log(evaluationRequest.user.name);

    const {
      data: {
        createEvaluation: { id: evaluationId },
      },
    } = await api.createEvaluation(rating).catch(({ errors }) => console.log(errors));
    console.log('rating succes');
    console.log(evaluationId);
    // for each skill create evaluation
    sliders.forEach((skill) => {
      const skillEvaluation = {
        evaluationId,
        skillId: skill.id,
        grade: parseInt(skill.grade, 10),
        group: userContext.group,
      };
      console.log(skillEvaluation);
      api.createRating(skillEvaluation).then(console.log('created evaluation')).catch(console.log);
    });
    // TODO:
    // await all createRatings
    // if no error and !manager deleteEvaluationRequest
    // else get all created evaluations via getRating en delete ze 1 voor 1
    // await api.deleteEvaluationRequest(evaluationRequest.id);
    navigation.navigate('Tabs');
    // setStatus({ ...status, errored: true });
    setStatus({ ...status, loading: false });
    return Promise.resolve('done');
  };

  return (
    <>
      <SafeAreaView style={styles.safeTop} />
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <LinearGradient
          colors={['rgba(10,185,255, 0.99)', 'rgb(10,19,255)']}
          style={styles.linearGradient}
        />
        <View style={styles.container}>
          <View style={styles.top}>
            <BackButton
              color={{ backgroundColor: '#fff', iconColor: 'rgb(44,44,44)' }}
              onPress={() => navigation.goBack()}
            />
            <View styles={styles.header}>
              <Text style={[styles.text, styles.header, { fontSize: 26 }]}>{username}</Text>
              <Text style={[styles.text, styles.header, { fontSize: 18 }]}>Your average:</Text>
              <Text style={[styles.text, styles.header, styles.grade]}>{average}</Text>
            </View>
          </View>
          <ScrollView style={styles.middle} contentContainerStyle={styles.scroll}>
            <Text style={[styles.text, styles.question]}>Any feedback?</Text>
            <CommentInput
              style={styles.input}
              numberOfLines={7}
              text={text}
              onChangeText={handleText}
            />
          </ScrollView>
          <View style={styles.bottom}>
            <Text style={styles.error}> {status.errored ? 'Something went wrong..' : ''} </Text>

            <NextButton
              title="Next"
              color={{ backgroundColor: '#fff', textColor: 'rgb(44,44,44)' }}
              onPress={uploadEvaluation}
              loading={status.loading}
            />
          </View>
        </View>
      </View>
    </>
  );
  // <SafeAreaView style={styles.safe}/>
}

EvaluateCommentScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  userContext: PropTypes.shape({
    group: PropTypes.string.isRequired,
  }),
};

export default withUser(EvaluateCommentScreen);
