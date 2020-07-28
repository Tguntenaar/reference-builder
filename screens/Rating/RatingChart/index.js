import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import BackButton from '../../../components/BackButton';
import Circle from '../../../components/Circle';
import RatingDetails from '../../../components/RatingDetails';
import Chart from '../../../components/Chart';
import styles from './style';
import api from '../../../apiwrapper';
import withUser from '../../../contexts/withUser';

function RatingChart({ navigation, route, userContext }) {
  const {
    rating: { skill },
  } = route.params;

  const [evaluations, setEvaluations] = useState([
    {
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

  useEffect(() => {
    const getEvaluations = async () => {
      // TODO: get all evaluations per skill per user
      console.log('Retrieving all ratings per skill..');
      const userId = userContext.id;
      const result = await api.getEvaluationsByUser(userId).catch((err) => {
        console.log(err);
      });
      // console.log(result);
      if (result.errors || !result.data) {
        console.log('Errors happened');
      } else {
        setEvaluations(result.data.evaluationsByUser.items);
      }
    };
    getEvaluations();
    return () => {
      // no cleanup
    };
  }, []);
  // filter evaluations die de juiste skill hebben gerate
  return (
    <>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container} contentContainerStyle={styles.scroll}>
        <View style={styles.top}>
          <LinearGradient colors={['rgb(10,185,255)', 'rgb(10,19,255)']} style={styles.header}>
            <Circle />
            <View style={styles.topNavigation}>
              <BackButton
                color={{ backgroundColor: '#fff', iconColor: 'rgb(44,44,44)' }}
                size={25}
                onPress={() => navigation.navigate('Tabs')}
              />
              <Feather
                name="settings"
                color="#fff"
                onPress={() => {
                  navigation.navigate('SettingsScreen');
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
                  <View style={styles.smallRing}>
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
            <Chart />
          </View>
        </View>
        <View style={styles.bottom}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.date}>October 2019</Text>
            {evaluations.map((evaluation) => {
              const hasSameSkill = (rating) => rating.skill.id === route.params.rating.skill.id;
              // If this evaluation has no ratings with this skill dont show it. FIXME:
              console.log(evaluation);
              // if (!evaluation.ratings.items.some(hasSameSkill)) return <></>;

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
            })}
          </ScrollView>
        </View>
      </View>
      <SafeAreaView style={styles.safe2} />
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
