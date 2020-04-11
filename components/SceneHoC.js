import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import HeaderBar from '../components/HeaderBar';
import { LinearGradient } from 'expo-linear-gradient';
import Gradients from '../constants/gradients';

import { View, StyleSheet } from 'react-native';

const SceneHoC = React.memo((props) => {
  return (
    <View style={styles.topView}>
      <HeaderBar navigation={props.navigation} title={props.title}></HeaderBar>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <LinearGradient
          colors={Gradients.whiteGradient}
          style={styles.linearGradient}
        >
          {props.children}
        </LinearGradient>
      </TouchableWithoutFeedback>
    </View>
  );
});

SceneHoC.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  linearGradient: {
    top: 2,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  integralHeader: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SceneHoC;
