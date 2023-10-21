import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PersonalDataScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
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

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingBottom: 25 },
            dimensions.width
          )}
        >
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
            {'Input your \npersonal data'}
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
            {'Please fill in a few details below'}
          </Text>
          {/* Full Name */}
          <View>
            {/* title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 30,
                  marginTop: 35,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Full name'}
            </Text>
            {/* Input */}
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newInputValue => {
                try {
                  setTextInputValue(newInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter your full name'}
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
                  height: 48,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Email address */}
          <View>
            {/* title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 30,
                  marginTop: 25,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Email address'}
            </Text>
            {/* Input */}
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newInputValue => {
                try {
                  setTextInputValue(newInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter your email address'}
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
                  height: 48,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth(
              { marginLeft: 30, marginRight: 30 },
              dimensions.width
            )}
          >
            {/* title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
                  fontFamily: 'Inter_400Regular',
                  marginTop: 25,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Birth date'}
            </Text>
            <DatePicker
              date={datePickerValue}
              format={'dd-mm-yyyy'}
              label={'Select yout birth date'}
              leftIconMode={'inset'}
              mode={'date'}
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              rightIconName={'AntDesign/calendar'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderColor: theme.colors['Light'],
                  borderRadius: 12,
                  marginTop: 8,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 4,
                },
                dimensions.width
              )}
              type={'underline'}
            />
          </View>
          {/* Full address */}
          <View>
            {/* title */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 30,
                  marginTop: 25,
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Full address'}
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={newTextAreaValue => {
                try {
                  setTextAreaValue(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter your full address'}
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
                  height: 100,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 12,
                },
                dimensions.width
              )}
              textAlignVertical={'top'}
              value={textAreaValue}
            />
          </View>
          {/* Confirm */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                marginTop: 45,
              },
              dimensions.width
            )}
          >
            {/* Confirm enabled */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('SuccessRegisterScreen');
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
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Confirm '}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PersonalDataScreen);
