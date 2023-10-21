import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
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
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              marginLeft: 10,
            },
            dimensions.width
          )}
        >
          {'Edit Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View>
          {/* Profile Pic */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Ellipse21}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 55,
                    height: 110,
                    position: 'absolute',
                    top: 5,
                    width: 110,
                  },
                  dimensions.width
                )}
              />
              <Touchable
                activeOpacity={0.8}
                disabledOpacity={0.8}
                onPress={() => {
                  const handler = async () => {
                    try {
                      await openImagePickerUtil({
                        mediaTypes: 'All',
                        allowsEditing: false,
                        quality: 0.2,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.EditProfile}
                  style={StyleSheet.applyWidth(
                    { height: 137, width: 120 },
                    dimensions.width
                  )}
                />
              </Touchable>
            </View>
          </View>
          {/* Full name */}
          <View>
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Full name'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              defaultValue={'Thomas Slebew'}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Email address */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Email address'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              defaultValue={'thomas@gmail.com'}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
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
              label={' '}
              leftIconMode={'inset'}
              mode={'date'}
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              rightIconName={'Feather/calendar'}
              style={StyleSheet.applyWidth(
                { marginTop: 4, paddingTop: 6 },
                dimensions.width
              )}
              type={'solid'}
            />
          </View>
          {/* Full address */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.85,
                },
                dimensions.width
              )}
            >
              {'Full address'}
            </Text>
            <TextInput
              defaultValue={
                'Jl. Raya indah No.189 Gg Macan, Malang, East Java, Indonesia'
              }
              multiline={true}
              numberOfLines={4}
              placeholder={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 120,
                  marginTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 12,
                },
                dimensions.width
              )}
              textAlignVertical={'top'}
            />
          </View>
        </View>
        {/* Update */}
        <Button
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 12,
              fontFamily: 'System',
              fontWeight: '700',
              height: 52,
              marginTop: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Update '}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(EditProfileScreen);
