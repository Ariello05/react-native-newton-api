import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from './components/customDrawerContent';
import customContentOptions from './navigation/customDrawerOptions';

import Colors from './constants/colors';
import IntegralScreen from './screens/IntegralScreen';
import DeriveScreen from './screens/DeriveScreen';

const AppDrawerNavigation = createDrawerNavigator();

export default function App() {
  const [functionData, setFunctionData] = useState('');

  const functionDataHandler = (data) => {
    setFunctionData(data);
  };

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
                  source={require('./assets/integral.png')}
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
}

const styles = StyleSheet.create({
  drawerView: {
    backgroundColor: Colors.gray,
    width: 240,
  },
});
