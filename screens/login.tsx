import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginState} from '../reducers/loginReducer';
import {StackNavigationScreen} from '../stack/stack-navigation';
import {AppStateTodo} from '../store/rootReducer';
import {Login} from '../types/login.type';
import {LoginUserAction} from '../actions/login.actions';
import {connect} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';

const LoginScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const loginAction = (data: Login) => {
    props.LoginUserAction(data);
  };

  return (
    <SafeAreaView style={style.viewSafeArea}>
      <View style={style.viewStyle}>
        <View style={style.viewHeader}>
          <Text style={style.title}>Todo Login</Text>
        </View>
        <View style={style.viewContent}>
          <View style={style.viewCard}>
            <Text style={style.textLabels}>Username</Text>
            <Controller
              name="userName"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={style.inputText}
                  value={value}
                  onBlur={onBlur}
                  placeholder="UserName"
                  autoCompleteType="email"
                  onChangeText={onChange}
                />
              )}
            />
            {errors.userName && <span>This field is required</span>}
            <Text style={style.textLabels}>Password</Text>
            <Controller
              name="password"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={style.inputText}
                  value={value}
                  onBlur={onBlur}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.password && <span>This field is required</span>}
            <View style={style.separator} />
            <View style={style.signIn}>
              <Button
                title="SignIn"
                color="orange"
                onPress={handleSubmit(loginAction)}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

type loginNavigationProps = NativeStackNavigationProp<
  StackNavigationScreen,
  'Splash'
>;

const style = StyleSheet.create({
  viewSafeArea: {
    flex: 1,
  },
  viewStyle: {
    borderTopColor: 'red',
    flex: 1,
    backgroundColor: 'blanchedalmond',
    justifyContent: 'center',
    margin: 'auto',
  },
  title: {
    fontSize: 40,
    fontFamily: 'UbuntuMono-BoldItalic',
    textAlign: 'center',
    textShadowColor: 'green',
  },
  viewCard: {
    textAlign: 'center',
    margin: 10,
  },
  textLabels: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: 'UbuntuMono-Regular',
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    fontFamily: 'UbuntuMono-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  signIn: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
  },
  viewHeader: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    textAlign: 'center',
  },
  viewContent: {
    flex: 3,
    backgroundColor: '#FFD',
    borderRadius: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = (state: AppStateTodo) => ({
  loginState: state.login,
});

const mapDispatchToProps = {
  LoginUserAction,
};

type Props = {
  loginState: LoginState;
  LoginUserAction: (login: Login) => void;
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
