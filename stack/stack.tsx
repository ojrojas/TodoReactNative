import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home';
import TaskScreen from '../screens/Task';
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import StorageService from '../services/storage.services';

const Stack = createNativeStackNavigator();

const StackContainerScreen = () => {
  let isSignedIn;
  StorageService.getSessionToken().then(data => (isSignedIn = data));
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {isSignedIn !== undefined ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen
              name="Task"
              component={TaskScreen}
              options={{title: 'Welcome'}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              key="splashKey"
              component={SplashScreen}
              options={{
                title: 'Splash',
                headerStyle: {backgroundColor: 'grey'},
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: 'Welcome'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackContainerScreen;
