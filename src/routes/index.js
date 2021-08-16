// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Nfc from '../screens/Nfc';
import PetTapForm from '../screens/form';
import {RouteConstants} from '../utils/constants';
import Success from '../screens/endpage';
import PetDetails from '../screens/Landing';
import Splash from '../screens/splash';
import Camera from '../screens/camera';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RouteConstants.SPLASH}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteConstants.SPLASH} component={Splash} />
        <Stack.Screen name={RouteConstants.HOMESCREEN} component={Home} />
        <Stack.Screen name={RouteConstants.PETTAPFORM} component={PetTapForm} />
        <Stack.Screen name={RouteConstants.NFCMANAGER} component={Nfc} />
        <Stack.Screen name={RouteConstants.SUCCESS} component={Success} />
        <Stack.Screen name={RouteConstants.CAMERASCREEN} component={Camera} />
        <Stack.Screen
          name={RouteConstants.PET_DETAILS}
          component={PetDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
