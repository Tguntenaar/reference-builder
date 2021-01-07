import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import BackButton from '../../../components/BackButton';
import Circle from '../../../components/Circle';
import RatingDetails from '../../../components/RatingDetails';
import Chart from '../../../components/Chart';
import Modal from '../../../components/Modal';
import styles from './style';
import api from '../../../apiwrapper';
import withUser from '../../../contexts/withUser';
import Colors from '../../../constants/Colors';

const curday = function (sp) {
  const today = new Date();
  let dd = today.getDate();
  const monthIndex = today.getMonth(); // As January is 0.
  let mm = monthIndex + 1;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const yyyy = today.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 9) mm = `0${mm}`;
  // return mm + sp + dd + sp + yyyy;
  return `${monthNames[monthIndex]} ${yyyy}`;
};

function RatingChart({ navigation, route, userContext }) {
  const {
    rating: { skill },
  } = route.params;
  const [loading, setLoading] = useState(false);
  const [evaluations, setEvaluations] = useState([
    {
      id: '1',
      author: {
        name: 'Boris Guntenaar',
        jobTitle: 'Accountant',
      },
      comment: 'This is my comment on this evaluation. You did a great job.',
      ratings: {
        items: [
          {
            grade: '9.5',
            skill: {
              id: '1',
              name: 'creativity',
              description: 'idem lorem',
            },
          },
        ],
      },
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [chartData, setchartData] = useState(false);

  useEffect(() => {
    // const getEvaluations =
    (async () => {
      // TODO: get all evaluations per skill per user
      console.log('Retrieving all ratings per skill..');
      setLoading(true);
      const result = await api.getEvaluationsByUser({ userId: userContext.id });
      // .catch(({ errors }) => {
      //   console.log(errors);
      // });
      // console.log({ result });
      if (result.errors || !result.data) {
        console.log('Errors happened');
      } else if (result.data.evaluationsByUser.items.length) {
        setEvaluations(result.data.evaluationsByUser.items);
      } else {
        console.log('no evaluations found');
      }
      setLoading(false);
    })();
    // getEvaluations();
    // return () => {
    //   // no cleanup
    // };
  }, [chartData]);
  // filter evaluations die de juiste skill hebben gerate
  const gradeColor = Colors.gradeToColor(route.params.rating.grade);

  return (
    <>
      <SafeAreaView style={styles.safe} />
      <SafeAreaView style={styles.safe2}>
        <View style={styles.top}>
          <LinearGradient colors={['rgb(10,185,255)', 'rgb(10,19,255)']} style={styles.header}>
            <Circle />
            <View style={styles.topNavigation}>
              <BackButton
                color={{ backgroundColor: '#fff', iconColor: 'rgb(44,44,44)' }}
                size={25}
                onPress={() => navigation.goBack()}
              />
              <Feather
                name="settings"
                color="#fff"
                onPress={() => {
                  navigation.navigate('TestScreen');
                }}
                style={styles.settingsIcon}
              />
            </View>
            <View style={styles.middleNavigation}>
              <View style={styles.bigRing}>
                <LinearGradient
                  colors={['rgba(10,185,255, 0.99)', 'rgb(10,19,255)']}
                  style={styles.mediumRing}
                >
                  <View style={[styles.smallRing, { backgroundColor: gradeColor }]}>
                    <Text style={styles.grade}>{route.params.rating.grade}</Text>
                  </View>
                </LinearGradient>
              </View>
              <View style={styles.middleNavigationInner}>
                <Text style={styles.skill}>{route.params.rating.skill.name}</Text>
                <Text style={styles.skillDescription}>{route.params.rating.skill.description}</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.middle}>
          <View style={styles.chart}>
            {chartData ? (
              <Chart />
            ) : (
              <View style={styles.replacement}>
                <Text style={styles.replacementText}> Not enough data yet. </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.bottom}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.date}>{curday('/')}</Text>
            {loading ? (
              <Text> Loading.. </Text>
            ) : (
              evaluations.map((evaluation) => {
                const hasSameSkill = (rating) => rating.skill.id === route.params.rating.skill.id;
                // If this evaluation has no ratings with this skill dont show it.

                // Filter the evaluations that don't have the skill we are looking viewing
                if (!evaluation.ratings.items.some(hasSameSkill))
                  return <View key={evaluation.id} />;

                return (
                  <RatingDetails
                    key={evaluation.id}
                    evaluation={evaluation}
                    skill={skill}
                    onViewDetails={() =>
                      navigation.navigate('DetailedRatingScreen', {
                        evaluation,
                      })
                    }
                  />
                );
              })
            )}
          </ScrollView>
        </View>
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </SafeAreaView>
    </>
  );
}
/**
{
  author: {
    name: 'Boris Guntenaar',
    jobTitle: 'Owner FlexInHouse',
  },
  skill: 'Creativity',
  description:
    'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
  skills: [
    {
      id: '1',
      name: 'Out of the Box',
      description:
        'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
      grade: 3,
    },
    {
      id: '2',
      name: 'Visual Skills',
      description:
        'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
      grade: 8,
    },
    {
      id: '3',
      name: 'Ideas',
      description:
        'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
      grade: 6,
    },
  ],
} */

RatingChart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      rating: PropTypes.shape({
        grade: PropTypes.number.isRequired,
        skill: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default withUser(RatingChart);
