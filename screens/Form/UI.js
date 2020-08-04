import React from 'react';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import NextButton from '../../components/NextButton';
import BackButton from '../../components/BackButton';

const UI = ({ fields, form, setForm, navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.back}>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Text style={styles.pageTitle}>{route.params.name}</Text>
      </View>
      <View style={styles.middle}>
        {fields.map((input) => {
          return (
            <TextInput
              key={input}
              clearTextOnFocus={false}
              onChangeText={(text) => {
                setForm({ ...form, [`${input}`]: text });
              }}
              style={styles.input}
              value={form[input]}
              placeholder={input}
            />
          );
        })}
      </View>

      <View style={styles.bottom}>
        <NextButton
          title="Submit"
          onPress={() => {
            // TODO: fill return Obj
            const returnObj = {};

            navigation.navigate(route.params.screen, {
              [`${route.params.post}`]: returnObj,
            });
          }}
        />
      </View>
    </View>
  );
};

UI.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      post: PropTypes.string,
      screen: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired,
  }),
  navigation: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string),
  setForm: PropTypes.func,
  form: PropTypes.object.isRequired,
};

UI.defaultProps = {
  route: {
    params: {
      name: 'Fill in the form',
      post: 'post',
    },
  },
};

export default UI;
