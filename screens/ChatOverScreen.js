import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  StarRating,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ChatOverScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [Feedback_Modal, setFeedback_Modal] = React.useState(false);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Custom Color'],
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            flexDirection: 'row',
            height: 72,
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Left View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Back */}
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle size={50}>
              <Icon
                color={theme.colors['Strong']}
                name={'Ionicons/arrow-back-sharp'}
                size={24}
              />
            </Circle>
          </Touchable>
          {/* User Details */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginLeft: 8 },
              dimensions.width
            )}
          >
            {/* User Image */}
            <Circle bgColor={theme.colors.light} size={48}>
              <Image
                resizeMode={'cover'}
                source={{
                  uri: `${
                    props.route?.params?.OtherUserImage ??
                    'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg'
                  }`,
                }}
                style={StyleSheet.applyWidth(
                  { height: 48, width: 48 },
                  dimensions.width
                )}
              />
            </Circle>

            <View>
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Strong'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {props.route?.params?.otherUser ?? 'Dr. Ken Dragon'}
              </Text>
              {/* Status */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['App Green'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    marginLeft: 10,
                    marginTop: 2,
                  },
                  dimensions.width
                )}
              >
                {'Online'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 20,
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
        {/* Chats */}
        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const chatsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={chatsData}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                listKey={'RZn3aHAO'}
                numColumns={1}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Users message */}
                      <>
                        {!(listData?.id === 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 4,
                                overflow: 'hidden',
                                paddingBottom: 4,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_17'],
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    borderTopRightRadius: 12,
                                    flex: 1,
                                    marginRight: 45,
                                    paddingBottom: 15,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  numberOfLines={1}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Poppins_400Regular',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Medium'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 11,
                                    lineHeight: 20,
                                    marginTop: 4,
                                    paddingBottom: 2,
                                    textAlign: 'left',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9:41 AM'}
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                      {/* My message */}
                      <>
                        {!(listData?.id !== 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginBottom: 4,
                                overflow: 'hidden',
                                paddingBottom: 4,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor: theme.colors['Primary'],
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    borderTopLeftRadius: 12,
                                    flex: 1,
                                    marginLeft: 45,
                                    paddingBottom: 15,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  numberOfLines={1}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color'],
                                      fontFamily: 'Poppins_400Regular',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Medium'],
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 11,
                                    lineHeight: 20,
                                    marginRight: 10,
                                    marginTop: 4,
                                    opacity: 0.8,
                                    paddingBottom: 2,
                                    textAlign: 'right',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9:41 AM'}
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                    </>
                  );
                }}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
        {/* Bottom View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              bottom: 0,
              flexDirection: 'column',
              justifyContent: 'space-between',
              left: 0,
              marginTop: 10,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
              position: 'absolute',
              right: 0,
            },
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
              {
                'Your consultation time has run out, please place an order again'
              }
            </Text>
          </View>
          {/* Send Feedback */}
          <Button
            onPress={() => {
              try {
                setFeedback_Modal(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Light'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginTop: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Send Feedback'}
          />
          {/* Book Again */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('SelectPatientScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 12,
                color: theme.colors['Custom Color'],
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginTop: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Book Again'}
          />
        </View>
      </KeyboardAwareScrollView>
      {/* Feedback Modal */}
      <>
        {!Feedback_Modal ? null : (
          <Modal animationType={'none'} transparent={true}>
            {/* Transparent BG View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  flex: 1,
                  opacity: 0.5,
                },
                dimensions.width
              )}
            />
            {/* Feedback Popup */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 12,
                  marginLeft: '5%',
                  marginRight: '5%',
                  paddingBottom: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 20,
                  position: 'absolute',
                  top: '20%',
                  width: '90%',
                  zIndex: 2,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { width: '100%' },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 18,
                      marginBottom: 5,
                      paddingLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {'Send Feedback'}
                </Text>
              </View>
              <StarRating
                activeColor={theme.colors['Custom Color_13']}
                inactiveColor={theme.colors.divider}
                isEditable={true}
                maxStars={5}
                onPress={newStarRatingValue => {
                  try {
                    setStarRatingValue(newStarRatingValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                rating={starRatingValue}
                starSize={40}
                style={StyleSheet.applyWidth(
                  { marginTop: 12 },
                  dimensions.width
                )}
              />
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
                placeholder={'Enter feedback here'}
                placeholderTextColor={theme.colors['Light']}
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    fontFamily: 'Inter_400Regular',
                    height: 120,
                    marginBottom: 10,
                    marginTop: 20,
                    paddingBottom: 8,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 8,
                    width: '100%',
                  },
                  dimensions.width
                )}
                textAlignVertical={'top'}
                value={textAreaValue}
              />
              {/* Submit */}
              <Button
                onPress={() => {
                  try {
                    setFeedback_Modal(false);
                    navigation.navigate('BottomTabNavigator', {
                      screen: 'HomeScreen',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.primary,
                    borderRadius: 12,
                    fontFamily: 'Inter_400Regular',
                    height: 48,
                    marginTop: 20,
                    textAlign: 'center',
                    width: '100%',
                  },
                  dimensions.width
                )}
                title={'Submit'}
              />
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(ChatOverScreen);
