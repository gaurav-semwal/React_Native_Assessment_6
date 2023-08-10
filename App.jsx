/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// / eslint-disable react-native/no-inline-css /
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
const App = () => {
  const checked = require('./asset/tick.png');
  const unChecked = require('./asset/tick1.png');
  const checkboxImage = {true: checked, false: unChecked};
  const [isChecked, setChecked] = useState(checkboxImage.false);

  const checkboxChange = () => {
    if (isChecked == checkboxImage.true) {
      setChecked(checkboxImage.false);
    } else {
      setChecked(checkboxImage.true);
    }
  };
  const App2 = () => {
    return (
      <View style={css.top}>
        <Image style={css.Arrow} source={require('./asset/Rightcopy.png')} />
        <Text style={css.Word}>Create Account</Text>
        <Image style={css.Bell} source={require('./asset/Bell.png')} />
        <Image style={css.Basket} source={require('./asset/Basket.png')} />
      </View>
    );
  };

  return (
    <ImageBackground style={{flex: 1}} source={require('./asset/BG.png')}>
      <SafeAreaView style={css.container}>
        <App2 />
        <View style={css.box1}>
          <View style={css.box2}>
            <Text style={css.Word_2}>Sign up with</Text>
            <View style={css.Button}>
              <TouchableOpacity style={[css.Button_1]}>
                <Image
                  source={require('./asset/Github.png')}
                  style={css.Button_Icon}
                />
                <Text>Github</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[css.Button_1]}>
                <Image
                  source={require('./asset/google.png')}
                  style={css.Button_Icon}
                />
                <Text>Google</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={css.box3}>
            <Text style={css.Word_3}>Or sign up with credentials</Text>
            <View style={css.Input}>
              <Image
                style={{
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  tintColor: 'grey',
                }}
                source={require('./asset/name_icon.png')}
              />
              <TextInput style={css.Input_Text} placeholder="Name" />
            </View>
            <View style={css.Input}>
              <Image
                style={{width: 16, height: 16, flexShrink: 0}}
                source={require('./asset/email_icon.png')}
              />
              <TextInput style={css.Input_Text} placeholder="Email" />
            </View>
            <View style={css.Input}>
              <Image
                style={{width: 16, height: 16, flexShrink: 0}}
                source={require('./asset/password_icon.png')}
              />
              <TextInput style={css.Input_Text} placeholder="Password" />
            </View>
            <View style={css.Password}>
              <Text style={{color: '#8898AA'}}>password strength:</Text>
              <Text style={css.Password_1}> strong</Text>
            </View>
            <View style={css.Privacy_Policy}>
              <TouchableOpacity onPress={checkboxChange}>
                <Image style={css.check} source={isChecked} />
              </TouchableOpacity>
              <Text
                style={{
                  color: '#525F7F',
                  marginLeft: 10,
                  marginTop: -2.5,
                  fontSize: 14,
                }}>
                I agree with the
              </Text>
              <Text
                style={{
                  color: '#5E72E4',
                  paddingLeft: 1.8,
                  marginTop: -2,
                  fontSize: 14,
                }}>
                Privacy Policy
              </Text>
            </View>
            <TouchableOpacity style={css.Create_Button}>
              <Text style={css.Create_Button_Text}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    top: 25,
  },
  Arrow: {
    left: 20,
    bottom: -1,
  },
  Word: {
    left: 60,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    fontStyle: 'normal',
    fontfamily: 'Open Sans',
    bottom: -1,
  },
  Bell: {
    left: 140,
    bottom: 3,
  },
  Basket: {
    left: 150,
    bottom: 5,
  },
  box1: {
    marginHorizontal: 15,
    marginTop: 70,
    marginBottom: 30,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  box2: {
    flex: 1.1,
    marginBottom: -15,
  },
  box3: {
    flex: 2.9,
    backgroundColor: '#F4F5F7',
    borderRadius: 6,
  },
  Word_3: {
    color: '#8898AA',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.4,
    marginVertical: 28,
    fontStyle: 'normal',
  },
  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#ADB5BD',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
  },
  icon2: {
    width: '100%',
    height: '100%',
    background: '#ADB5BD',
  },
  Input_Text: {
    paddingHorizontal: 17,
  },
  Password: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 18,
  },
  Password_1: {
    color: '#2DCE89',
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 3,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
  },
  Privacy_Policy: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 16,
  },
  Create_Button: {
    marginHorizontal: 90,
    marginVertical: 23,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E72E4',
    flexShrink: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  Create_Button_Text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  Word_2: {
    color: '#8898AA',
    textAlign: 'center',
    marginTop: 21,
    marginBottom: -5,
    letterSpacing: 0.4,
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  Button_1: {
    flexDirection: 'row',
    activeOpacity: 0.7,
    backgroundColor: 'white',
    paddingHorizontal: 22,
    maxWidthwidth: 140,
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    marginRight: 6,
    marginLeft: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Button_Icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default App;
