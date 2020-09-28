import React from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import NextButton from '../../components/NextButton';
import BackButton from '../../components/BackButton';

const UI = ({ form, setForm, activateType, navigation, route }) => {
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
      {
        form.length ? 
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
        </View> : null
      }

      <View style={styles.bottom}>
        {form.length ? (
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
        ) : null}
      </View>
      {route.params?.list.length ? (
        <ScrollView
          contentContainerStyle={styles.bottom}
          style={{ flexGrow: 1, backgroundColor: 'red' }}
        >
          <Text>Or Activate old skill</Text>
          {route.params.list.map(({ id, name }) => {
            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  activateType(id);
                }}
                style={styles.inActive}
              >
                <Text>
                  {' '}
                  {name} {id}{' '}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : null}
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
