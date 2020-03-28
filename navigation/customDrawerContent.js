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
import Colors from '../constants/colors';

const CustomDrawerContent = ({ progress, ...rest }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX }] }}>
      <LinearGradient colors={['#333', '#222']} style={styles.linearGradient}>
        <DrawerContentScrollView {...rest}>
          <DrawerItemList {...rest} />
        </DrawerContentScrollView>
        <DrawerItem
          label="Back"
          labelStyle={{ fontSize: 18, left: 15, color: Color.primary }}
          style={{ alignSelf: 'flex-end' }}
          onPress={() => rest.navigation.closeDrawer()}
        ></DrawerItem>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

    borderRadius: 1,
  },
});

export default CustomDrawerContent;
