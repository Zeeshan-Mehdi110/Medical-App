import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const VerificationCodeScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Divider'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'center', paddingLeft: 20 },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon name={'AntDesign/arrowleft'} size={24} />
          </View>
        </Touchable>
      </View>
      {/* Title */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_500Medium',
            fontSize: 25,
            marginLeft: 30,
            marginTop: 15,
            opacity: 0.8,
          },
          dimensions.width
        )}
      >
        {'Enter code sent \nto your number'}
      </Text>
      {/* sub title */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            marginLeft: 30,
            marginTop: 15,
            opacity: 0.4,
          },
          dimensions.width
        )}
      >
        {'We sent it  to number +62 81788675764'}
      </Text>
      {/* Code */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* code */}
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'phone-pad'}
          onChangeText={newCodeValue => {
            try {
              setTextInputValue(newCodeValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Divider'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 52,
              marginLeft: 30,
              marginTop: 35,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: 52,
            },
            dimensions.width
          )}
          value={textInputValue}
        />
        {/* code */}
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'phone-pad'}
          onChangeText={newCodeValue => {
            try {
              setTextInputValue(newCodeValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Divider'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 52,
              marginTop: 35,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: 52,
            },
            dimensions.width
          )}
        />
        {/* code */}
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'phone-pad'}
          onChangeText={newCodeValue => {
            try {
              setTextInputValue(newCodeValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Divider'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 52,
              marginTop: 35,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: 52,
            },
            dimensions.width
          )}
        />
        {/* code */}
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'phone-pad'}
          onChangeText={newCodeValue => {
            try {
              setTextInputValue(newCodeValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Divider'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 52,
              marginTop: 35,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: 52,
            },
            dimensions.width
          )}
        />
        {/* code */}
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'phone-pad'}
          onChangeText={newCodeValue => {
            try {
              setTextInputValue(newCodeValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'*'}
          placeholderTextColor={theme.colors['Light']}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Divider'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 52,
              marginRight: 30,
              marginTop: 35,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              textAlign: 'center',
              width: 52,
            },
            dimensions.width
          )}
        />
      </View>
      {/* Confirm enabled Login */}
      <>
        {!(Constants['OnboardingFlow'] === 'login') ? null : (
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Primary'],
                borderRadius: 12,
                color: theme.colors['Custom Color'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                height: 52,
                marginLeft: 30,
                marginRight: 30,
                marginTop: 45,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Confirm '}
          />
        )}
      </>
      {/* Confirm enabled Sign up */}
      <>
        {!(Constants['OnboardingFlow'] === 'signup') ? null : (
          <Button
            onPress={() => {
              try {
                navigation.navigate('PersonalDataScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Primary'],
                borderRadius: 12,
                color: theme.colors['Custom Color'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                height: 52,
                marginLeft: 30,
                marginRight: 30,
                marginTop: 45,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Confirm '}
          />
        )}
      </>
      {/* Request again */}
      <Touchable
        style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'center' },
            dimensions.width
          )}
        >
          {/* Dont have code? */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Light'],
                fontFamily: 'Inter_400Regular',
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Dont have code? '}
          </Text>
          {/*  Request again */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Primary'],
                fontFamily: 'Inter_500Medium',
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Request again'}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

export default withTheme(VerificationCodeScreen);
