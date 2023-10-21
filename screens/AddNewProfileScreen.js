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

const AddNewProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
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
          {'Add New Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Details */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Disclaimer */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_6'],
                borderRadius: 4,
                flexDirection: 'row',
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 15,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Primary']}
              name={'Ionicons/ios-information-circle-outline'}
              size={20}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {"Please enter the details according to the patient's ID card"}
            </Text>
          </View>
          {/* Perosonal Photo */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Perosonal Photo'}
            </Text>

            <Touchable
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
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Light'],
                    borderLeftWidth: 1,
                    borderRadius: 12,
                    borderRightWidth: 1,
                    borderStyle: 'dashed',
                    borderTopWidth: 1,
                    height: 140,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Primary']}
                  name={'AntDesign/camerao'}
                  size={35}
                />
              </View>
            </Touchable>
          </View>
          {/* Full name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Full name'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
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
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  marginTop: 10,
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
          {/* Birth date */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Birth date'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 12,
                  marginTop: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                },
                dimensions.width
              )}
            >
              <DatePicker
                date={datePickerValue}
                format={'dd/mm/yyyy'}
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
                type={'underline'}
              />
            </View>
          </View>
          {/* Relationship */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Relationship'}
            </Text>

            <Touchable
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color'],
                    borderRadius: 12,
                    flexDirection: 'row',
                    height: 48,
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                    paddingRight: 20,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Light'],
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'Select your relation'}
                </Text>
                <Icon
                  color={theme.colors['Light']}
                  name={'Entypo/chevron-small-down'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
          {/* ID Card */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, fontFamily: 'Inter_300Light' },
                dimensions.width
              )}
            >
              {'Perosonal Photo'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderStyle: 'solid',
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 72,
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.ID}
                  style={StyleSheet.applyWidth(
                    { borderRadius: 4, height: 40, width: 40 },
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { marginLeft: 10 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        marginBottom: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'KTP.img'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_300Light',
                        fontSize: 12,
                        opacity: 0.5,
                      },
                      dimensions.width
                    )}
                  >
                    {'240 kb'}
                  </Text>
                </View>
              </View>

              <Touchable
                style={StyleSheet.applyWidth(
                  { marginTop: 10 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Light'],
                      borderLeftWidth: 1,
                      borderRadius: 4,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 32,
                      justifyContent: 'center',
                      width: 32,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Medium']}
                    name={'AntDesign/delete'}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>
          </View>
          {/* Save */}
          <Button
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
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginBottom: 25,
                marginTop: 40,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Save'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddNewProfileScreen);
