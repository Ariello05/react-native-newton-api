import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Colors from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Gradients from '../constants/gradients';

const HeaderBar = (props) => {
  return (
    <LinearGradient
      colors={Gradients.headerGradient}
      style={styles.linearGradient}
    >
      <View style={styles.headerLeftIcon}>
        <Ionicons
          name="md-menu"
          size={40}
          color={Colors.white}
          onPress={() => {
            props.navigation.openDrawer();
          }}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </LinearGradient>
  );
};

HeaderBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  headerTitle: {
    color: Colors.white,
    alignSelf: 'center',
    paddingTop: 2,
    fontSize: 25,
  },
  linearGradient: {
    paddingTop: 30,
    height: 80,
    backgroundColor: Colors.accent,
    flexDirection: 'row',
    borderRadius: 1,
    elevation: 5,
    marginBottom: 1,
  },
  headerContainer: {
    flex: 1,
    paddingRight: 45,
  },
  headerLeftIcon: {
    marginLeft: 10,
    paddingLeft: 5,
    width: 40,
    height: 40,
  },
});

export default HeaderBar;
