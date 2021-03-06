import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';

const SingleFunctionComponent = (props) => {
  const [resultData, setResult] = useState('');
  const [buttonTitle, setButtonTitle] = useState('Update');
  const functionData = props.functionData;

  let resultView;

  const onSuccessCall = (value) => {
    setResult(value);
    setButtonTitle('Update');
    Keyboard.dismiss();
  };

  useEffect(() => {
    console.log('EFFECT');
    setResult('');
    //setButtonTitle('Update');
  }, []);

  if (resultData !== '') {
    resultView = (
      <View style={styles.outputView}>
        <Text style={styles.functionResult}>{'F(x) = ' + resultData}</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.inputCard}>
        <TextInput
          autoCapitalize="none"
          autoCompleteType="off"
          placeholder="f(x)"
          placeholderTextColor={Colors.placeholder}
          style={styles.functionInput}
          value={functionData}
          onChangeText={(text) => {
            props.onChangeFunctionHandler(text);
          }}
        />
        <View style={styles.updateStyle}>
          <Button
            title={buttonTitle}
            color={Colors.accent}
            onPress={() => {
              props.functionApiCall(functionData, onSuccessCall);
              if (functionData !== '') setButtonTitle('Fetching ... '); //+ alert
            }}
          ></Button>
        </View>
      </View>

      {resultView}
    </View>
  );
};

SingleFunctionComponent.propTypes = {
  onChangeFunctionHandler: PropTypes.func.isRequired,
  functionApiCall: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 20,
  },
  functionInput: {
    width: '90%',
    margin: 10,
    height: 30,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
    fontSize: 22,
    textAlign: 'center',
  },
  functionResult: {
    width: 'auto',
    margin: 10,
    paddingVertical: 3,
    fontSize: 14,
    height: 'auto',
  },
  updateStyle: {
    width: 100,
    //alignSelf: 'flex-end',
    //paddingRight: 50,
  },
  inputCard: {
    backgroundColor: Colors.cardColor,
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 3,
    width: '100%',
  },
  outputView: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default SingleFunctionComponent;
