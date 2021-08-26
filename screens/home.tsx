import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ContextThemeApplication} from '../providers/theme-provider';
import {StackNavigationScreen} from '../stack/stack-navigation';

export const HomeScreen = () => {
  const {theme} = useContext(ContextThemeApplication);
  const newStyleText = theme.themeTexts;
  const navigation = useNavigation<homeNavigationProps>();

  return (
    <SafeAreaView style={[theme.themeViews, style.safeAreaView]}>
      <ScrollView>
        <View>
          <Text style={[newStyleText, style.titleText]}>Todo Application</Text>
        </View>
        <Button
          title="Go to Task"
          onPress={() => navigation.navigate('Task')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

type homeNavigationProps = NativeStackNavigationProp<
  StackNavigationScreen,
  'Task'
>;

const style = StyleSheet.create({
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'StyleScript-Regular',
  },
  safeAreaView: {
    margin: 10,
  },
});
