import React from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import NextButton from '../../components/NextButton';
import BackButton from '../../components/BackButton';

const UI = ({ fields, form, setForm, activateType, navigation, route }) => {
  const a = ['4861079b-92ec-456b-9f47-7bd39eafa184', 2, 3, 4, 5];
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
        {form.map((input, index) => {
          return (
            <View key={input.text}>
              <TextInput
                clearTextOnFocus={false}
                onChangeText={(text) => {
                  // eslint-disable-next-line prefer-const
                  let tempForm = form.slice();
                  tempForm[index] = { ...tempForm[index], value: text };
                  setForm(tempForm);
                }}
                style={styles.input}
                value={form[index].value}
                placeholder={form[index].text}
              />
            </View>
          );
        })}
      </View>

      <View style={styles.bottom}>
        <NextButton
          title="Submit"
          onPress={() => {
            const returnObj = {};
            form.forEach((element) => {
              returnObj[element.key] = element.value;
            });
            console.log(returnObj);
            navigation.navigate(route.params.screen, {
              // dynamic post name
              [`${route.params.post}`]: returnObj,
            });
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.bottom}
        style={{ flexGrow: 1, backgroundColor: 'red' }}
      >
        {a.map((num) => {
          return (
            <TouchableOpacity
              key={num}
              onPress={() => {
                activateType(num);
              }}
              style={styles.inActive}
            >
              <Text> {num} </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
  activateType: PropTypes.func,
  form: PropTypes.arrayOf(PropTypes.object).isRequired,
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
