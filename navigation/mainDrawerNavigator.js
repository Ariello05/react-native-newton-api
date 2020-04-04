import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './customDrawerContent';
import customContentOptions from './customDrawerOptions';
import PropTypes from 'prop-types';

import IntegralScreen from '../screens/IntegralScreen';
import DeriveScreen from '../screens/DeriveScreen';

const AppDrawerNavigation = createDrawerNavigator();

const MainDrawerNavigator = (props) => {
  const functionData = props.functionData;
  const functionDataHandler = props.functionDataHandler;

  return (
    <NavigationContainer>
      <AppDrawerNavigation.Navigator
        initialRouteName="Home"
        drawerContent={(props) => CustomDrawerContent(props)}
        drawerContentOptions={customContentOptions}
        drawerStyle={styles.drawerView}
      >
        <AppDrawerNavigation.Screen
          options={{
            drawerLabel: 'Integral',
            // eslint-disable-next-line react/prop-types
            drawerIcon: ({ color, size }) => {
              return (
                <Image
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    height: size + 10,
                    width: size - 5,
                    tintColor: color,
                    marginRight: -10,
                  }}
                  resizeMode="stretch"
                  source={require('../assets/integral.png')}
                ></Image>
              );
            },
          }}
          name="Integral"
        >
          {(props) => (
            <IntegralScreen
              {...props}
              functionData={functionData}
              onChangeFunctionHandler={functionDataHandler}
            />
          )}
        </AppDrawerNavigation.Screen>
        <AppDrawerNavigation.Screen name="Derive">
          {(props) => (
            <DeriveScreen
              {...props}
              functionData={functionData}
              onChangeFunctionHandler={functionDataHandler}
            />
          )}
        </AppDrawerNavigation.Screen>
      </AppDrawerNavigation.Navigator>
    </NavigationContainer>
  );
};

MainDrawerNavigator.propTypes = {
  functionDataHandler: PropTypes.func.isRequired,
  functionData: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  drawerView: {
    backgroundColor: 'transparent', //?
    //width: 240,
  },
});

export default MainDrawerNavigator;
