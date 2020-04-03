import React from 'react';
import SingleFunctionComponent from '../components/SingleFunctionComponent';
import Math_Function from '../constants/math_functions.js';
import fetchFunction from '../api/fetchFunction';
import PropTypes from 'prop-types';
import HeaderBar from '../components/HeaderBar';
import Line from '../components/Line';
import { LinearGradient } from 'expo-linear-gradient';
import Gradients from '../constants/gradients';

import { View, StyleSheet, Image, Text } from 'react-native';

const fetchData = (arg, callback) => {
  return fetchFunction(Math_Function.integrate, arg, callback);
};

const IntegralScreen = React.memo((props) => {
  return (
    <View style={styles.topView}>
      <HeaderBar navigation={props.navigation} title="Integrate!"></HeaderBar>
      <LinearGradient
        colors={Gradients.whiteGradient}
        style={styles.linearGradient}
      >
        <View style={styles.integralHeader}>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 50,
              width: 20,
              tintColor: 'black',
              marginRight: 2,
              marginTop: 0,
            }}
            resizeMode="stretch"
            source={require('../assets/integral.png')}
          ></Image>
          <Text style={{ fontSize: 40 }}>f(x)dx = F(x)</Text>
        </View>
        <Line />
        <SingleFunctionComponent {...props} functionApiCall={fetchData} />
      </LinearGradient>
    </View>
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
  },
  integralHeader: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IntegralScreen;
