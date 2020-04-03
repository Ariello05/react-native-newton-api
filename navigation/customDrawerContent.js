import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import Color from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Gradients from '../constants/gradients';

const CustomDrawerContent = ({ progress, ...rest }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{ ...styles.mainView, transform: [{ translateX }] }}>
      <LinearGradient
        colors={Gradients.drawerGradient}
        style={styles.linearGradient}
      >
        <DrawerContentScrollView {...rest}>
          <DrawerItemList {...rest} />
        </DrawerContentScrollView>
        <DrawerItem
          label="Back"
          labelStyle={styles.backButtonLabel}
          style={styles.backButton}
          onPress={() => rest.navigation.closeDrawer()}
        ></DrawerItem>
      </LinearGradient>
    </Animated.View>
  );
};
CustomDrawerContent.propTypes = {
  progress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 1,
  },
  mainView: {
    flex: 1,
  },
  backButtonLabel: {
    fontSize: 18,
    left: 15,
    color: Color.primary,
  },
  backButton: {
    alignSelf: 'flex-end',
  },
});

export default CustomDrawerContent;
