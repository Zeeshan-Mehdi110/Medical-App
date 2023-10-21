import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ChatScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
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
        {/* Right View */}
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
          {/* Audio Call */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('CallHospitalScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle size={50}>
              <Icon
                color={theme.colors['Medium']}
                name={'Ionicons/call-outline'}
                size={24}
              />
            </Circle>
          </Touchable>
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
                listKey={'UlIzxIQm'}
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
        {/* Message Tray */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              bottom: 0,
              flexDirection: 'row',
              height: 104,
              justifyContent: 'space-between',
              left: 0,
              marginTop: 10,
              paddingLeft: 20,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 20,
              },
              dimensions.width
            )}
          >
            {/* Emojis btn */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 48,
                  justifyContent: 'center',
                  width: 48,
                },
                dimensions.width
              )}
            >
              {/* Send */}
              <Touchable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 48,
                      justifyContent: 'center',
                      width: 48,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Light']}
                    name={'Entypo/emoji-happy'}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>

            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <TextInput
                editable={true}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Type Message'}
                placeholderTextColor={theme.colors['Light']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 14,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
          </View>
          {/* Send Btn */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                marginRight: 20,
                width: 48,
              },
              dimensions.width
            )}
          >
            {/* Send */}
            <Touchable>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Primary'],
                    borderRadius: 12,
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom Color']}
                  name={'Feather/send'}
                  size={24}
                />
              </View>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ChatScreen);
