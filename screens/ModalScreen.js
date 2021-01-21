import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import Modal from '../components/Modal';
/**
 *
 * @param {*} param0
 * Het modal component was de eerste keuze qua UI
 * maar modal screen is handiger aan te roepen vanuit elke plek van de app
 * omdat je anders modal/usestat moet importeren en implementeren overal waar je
 * een error notificatie wilt toevoegen.
 */
const ModalScreen = ({ navigation, route }) => {
  const { initialState } = route.params;
  const [modalVisible, setModalVisible] = useState(initialState);
  console.log(initialState);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Modal
        navigation={navigation}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <Text style={{ fontSize: 30 }}>We will fix this!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default ModalScreen;
