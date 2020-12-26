import React from 'react';
import { Modal, View, Text, Image } from 'react-native';
import NextButton from '../NextButton';

import styles from './style';

const PopUpModal = ({ modalVisible, setModalVisible, text, title }) => {
  const header = title || 'Invitation sent!';
  const subText =
    text ||
    'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor.';
  return (
    <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Image style={styles.image} source={require('../../assets/images/group2.png')} />
          <Text style={styles.text}>{header}</Text>
          <Text style={styles.subText}>{subText}</Text>

          <NextButton
            title="Ok"
            onPress={() => {
              if (typeof setModalVisible === 'function') {
                setModalVisible(!modalVisible);
              }
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PopUpModal;
