import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import NextButton from '../../../components/NextButton';
import BackButton from '../../../components/BackButton';
import { imageEsther } from '../../../constants/Images';

// https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
function sendEvaluationRequests({ route }) {
  const navigation = useNavigation();
  const [select, setSelect] = useState(
    route.params.members.map((link) => {
      return { ...link, sendRequest: true };
    })
  );

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
              style={{ zIndex: 4 }}
              color={{ backgroundColor: '#fff', iconColor: 'rgb(44,44,44)' }}
              onPress={() => navigation.goBack()}
            />
            <View styles={styles.header}>
              <Text style={[styles.text, styles.header, styles.grade]}>Ask for Evaluation</Text>
            </View>
          </View>
          <ScrollView style={styles.middle} contentContainerStyle={styles.scroll}>
            {select.map((link) => {
              return (
                <View key={link.id}>
                  <Text style={{ fontSize: 20, color: 'white' }}>{link.user.name}</Text>
                  <TouchableOpacity
                    key={link.id}
                    style={[
                      styles.imageContainer,
                      {
                        backgroundColor: link.sendRequest ? 'rgb(0,255,49)' : 'transparent',
                      },
                    ]}
                    onPress={() => {
                      const temp = select.slice();
                      temp.map((link2) => {
                        if (link2.id === link.id) {
                          link2.sendRequest = !link2.sendRequest;
                          // return {
                          //   ...link2,
                          //   sendRequest: !link2.sendRequest,
                          // }
                        }
                        return link2;
                      });
                      setSelect(temp);
                    }}
                  >
                    <Image style={styles.image} source={imageEsther} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.bottom}>
            <Text style={styles.selected}>
              {select.filter((link) => link.sendRequest).length} selected
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
