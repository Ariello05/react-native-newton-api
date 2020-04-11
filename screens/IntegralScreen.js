import React from 'react';
import SingleFunctionComponent from '../components/SingleFunctionComponent';
import Math_Function from '../constants/math_functions.js';
import fetchFunction from '../api/fetchFunction';
import PropTypes from 'prop-types';
import Line from '../components/Line';
import SceneHoC from '../components/SceneHoC';

import { View, StyleSheet, Image, Text } from 'react-native';
import Color from '../constants/colors';
const fetchData = (arg, callback) => {
  return fetchFunction(Math_Function.integrate, arg, callback);
};

const IntegralScreen = React.memo((props) => {
  return (
    <SceneHoC title="Integral" navigation={props.navigation}>
      <View style={styles.integralHeader}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={styles.intergralImage}
          resizeMode="stretch"
          source={require('../assets/integral.png')}
        ></Image>
        <Text style={styles.integralText}>f(x)dx = F(x)</Text>
      </View>
      <Line />
      <SingleFunctionComponent {...props} functionApiCall={fetchData} />
    </SceneHoC>
  );
});

IntegralScreen.propTypes = {
  onChangeFunctionHandler: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
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
  intergralImage: {
    height: 50,
    width: 20,
    tintColor: Color.gray,
    marginRight: 2,
    marginTop: 0,
  },
  integralText: {
    fontSize: 40,
  },
});

export default IntegralScreen;
