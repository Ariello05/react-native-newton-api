import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

const CustomDrawerContent = ({ progress, ...rest }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX }] }}>
      <DrawerContentScrollView {...rest}>
        <DrawerItemList {...rest} />
      </DrawerContentScrollView>
      <DrawerItem
        label="Back"
        labelStyle={{ fontSize: 18, left: 15, color: 'orange' }}
        style={{ alignSelf: 'flex-end' }}
        onPress={() => rest.navigation.closeDrawer()}
      ></DrawerItem>
    </Animated.View>
  );
};

export default CustomDrawerContent;
