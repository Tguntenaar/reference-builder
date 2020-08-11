import React, { useState } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import styles from './style';

import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import api from '../../../apiwrapper';
import { imageEsther } from '../../../constants/Images';

// https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
function sendEvaluationRequests({ navigation, route }) {
  const [select, setSelect] = useState([
    {
      id: '1',
      active: true,
    },
    {
      id: '2',
      active: true,
    },
    {
      id: '31',
      active: true,
    },
  ]);
  const [status, setStatus] = useState({ loading: false, errored: false });

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
              onPress={() => navigation.navigate('TeamSettingsScreen')}
            />
            <View styles={styles.header}>
              <Text style={[styles.text, styles.header, styles.grade]}>Ask for Evaluation</Text>
            </View>
          </View>
          <ScrollView style={styles.middle} contentContainerStyle={styles.scroll}>
            {select.map((person) => {
              return (
                <TouchableOpacity
                  key={person.id}
                  style={[
                    styles.imageContainer,
                    { backgroundColor: person.active ? 'rgb(0,255,49)' : 'transparent' },
                  ]}
                  onPress={() => {
                    const temp = select.slice();
                    temp.map((p2) => {
                      if (p2.id === person.id) {
                        p2.active = !p2.active;
                      }
                      return p2;
                    });
                    setSelect(temp);
                  }}
                >
                  <Image style={styles.image} source={imageEsther} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={styles.bottom}>
            <Text style={styles.selected}>
              {select.filter((person) => person.active).length} selected
            </Text>
            <NextButton
              title="Send invite"
              color={{ backgroundColor: '#fff', textColor: 'rgb(10,19,255)' }}
              onPress={() =>
                navigation.navigate('TeamSettingsScreen', {
                  select,
                })
              }
              loading={status.loading}
            />
          </View>
        </View>
      </View>
    </>
  );
  // <SafeAreaView style={styles.safe}/>
}

sendEvaluationRequests.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default sendEvaluationRequests;
