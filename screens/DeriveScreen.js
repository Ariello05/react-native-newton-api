import React from 'react';
import SingleFunctionComponent from '../components/SingleFunctionComponent';
import Math_Function from '../constants/math_functions.js';
import fetchFunction from '../api/fetchFunction';
import PropTypes from 'prop-types';
import HeaderBar from '../components/HeaderBar';
import { View, StyleSheet } from 'react-native';
import SceneHoC from '../components/SceneHoC';

const fetchData = (arg, callback) => {
  return fetchFunction(Math_Function.derive, arg, callback);
};

const DeriveScreen = React.memo((props) => {
  return (
    <SceneHoC title="Derive" navigation={props.navigation}>
      <View style={styles.topView}>
        <SingleFunctionComponent {...props} functionApiCall={fetchData} />
      </View>
    </SceneHoC>
  );
});

DeriveScreen.propTypes = {
  onChangeFunctionHandler: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  topView: { flex: 1, flexDirection: 'column' },
});

export default DeriveScreen;
