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
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';

const SingleInputScene = (props) => {
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
        <View style={styles.topBar}>
          <View style={styles.headerLeftIcon}>
            <Ionicons
              name="md-menu"
              size={40}
              color="orange"
              onPress={() => {
                props.navigation.openDrawer();
              }}
            />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{props.title}</Text>
          </View>
        </View>
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

SingleInputScene.propTypes = {
  onChangeFunctionHandler: PropTypes.func.isRequired,
  functionApiCall: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  headerTitle: {
    color: Colors.white,
    alignSelf: 'center',
    paddingTop: 2,
    fontSize: 25,
  },
  headerContainer: {
    flex: 1,
    paddingRight: 45,
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 90,
  },
  topBar: {
    paddingTop: 30,
    height: 80,
    backgroundColor: Colors.gray,
    flexDirection: 'row',
  },
  headerLeftIcon: {
    marginLeft: 10,
    paddingLeft: 5,
    width: 40,
    height: 40,
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

export default SingleInputScene;
