import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigationScreen} from '../stack/stack-navigation';

const SplashScreen = () => {
  const navigation = useNavigation<splashNavigationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });

  return (
    <View style={style.viewSplah}>
      <Text style={style.textTitle}>Todo Application Spark'2</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textTitle: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'UbuntuMono-BoldItalic',
  },
  viewSplah: {
    flex: 1,
    justifyContent: 'center',
  },
});

type splashNavigationProps = NativeStackNavigationProp<
  StackNavigationScreen,
  'Login'
>;

export default SplashScreen;
