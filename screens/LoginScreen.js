import React from 'react';
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

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

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
        {'Enter your \nmobile number'}
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
        {'We will send you a confirmation code'}
      </Text>
      {/* Phone number */}
      <TextInput
        autoCapitalize={'none'}
        keyboardType={'phone-pad'}
        onChangeText={newPhoneNumberValue => {
          try {
            setTextInputValue(newPhoneNumberValue);
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'Enter phone number'}
        placeholderTextColor={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderBottomWidth: 1,
            borderColor: theme.colors['Light'],
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            height: 48,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 35,
            paddingBottom: 8,
            paddingLeft: 20,
            paddingRight: 8,
            paddingTop: 8,
          },
          dimensions.width
        )}
        value={textInputValue}
      />
      {/* Error msg */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color_4'],
            fontFamily: 'Inter_200ExtraLight',
            marginLeft: 30,
            marginTop: 8,
          },
          dimensions.width
        )}
      >
        {' Incorrect phone number'}
      </Text>
      {/* Continue enabled */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('VerificationCodeScreen');
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
        title={'Continue '}
      />
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
