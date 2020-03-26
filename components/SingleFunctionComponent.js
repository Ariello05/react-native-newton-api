import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';

const SingleFunctionComponent = (props) => {
  const [resultData, setResult] = useState('');
  const functionData = props.functionData;

  const onSuccessCall = (value) => {
    setResult(value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.topView}>
        <View style={styles.mainView}>
          <TextInput
            keyboardType={'numeric'}
            style={styles.functionInput}
            value={functionData}
            onChangeText={(text) => {
              props.onChangeFunctionHandler(text);
            }}
          />
          <Button
            title="Update"
            color={Colors.primary}
            onPress={() => {
              props.functionApiCall(functionData, onSuccessCall);
            }}
          ></Button>
          <Text style={styles.functionResult}>{resultData}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

SingleFunctionComponent.propTypes = {
  onChangeFunctionHandler: PropTypes.func.isRequired,
  functionApiCall: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 90,
  },
  functionInput: {
    width: 160,
    margin: 10,
    height: 30,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
  },
  functionResult: {
    width: 160,
    margin: 10,
    height: 30,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
  },
});

export default SingleFunctionComponent;
