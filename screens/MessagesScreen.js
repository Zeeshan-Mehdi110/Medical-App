import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const MessagesScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth({ height: '100%' }, dimensions.width)}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { height: 48, marginTop: 12, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_500Medium',
              fontSize: 24,
            },
            dimensions.width
          )}
        >
          {'Message'}
        </Text>
      </View>
      {/* Chats */}
      <View
        style={StyleSheet.applyWidth(
          { borderRadius: 12, flex: 1, marginLeft: 20, marginRight: 20 },
          dimensions.width
        )}
      >
        <DraftbitExampleDataApi.FetchUsersGET limit={4}>
          {({ loading, error, data, refetchUsers }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={fetchData}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                listKey={'C2iMNJaF'}
                numColumns={1}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      <>
                        {!(listData?.id < 3) ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('ChatScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['Custom Color'],
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['Divider'],
                                  borderRadius: 12,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: 12,
                                  paddingBottom: 18,
                                  paddingLeft: 15,
                                  paddingRight: 15,
                                  paddingTop: 18,
                                },
                                dimensions.width
                              )}
                            >
                              <View>
                                <CircleImage
                                  size={48}
                                  source={{ uri: `${listData?.avatar}` }}
                                />
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { flex: 1, marginLeft: 10, marginRight: 20 },
                                  dimensions.width
                                )}
                              >
                                {/* Name ~ */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 16,
                                      lineHeight: 20,
                                      marginTop: 4,
                                      opacity: 1,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Dr. '}
                                  {listData?.firstName}
                                </Text>
                                {/* Message ~ */}
                                <Text
                                  numberOfLines={1}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_300Light',
                                      fontSize: 12,
                                      lineHeight: 20,
                                      marginTop: 4,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { alignItems: 'flex-end' },
                                  dimensions.width
                                )}
                              >
                                {/* time ~! */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Medium'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 11,
                                      lineHeight: 20,
                                      marginBottom: 4,
                                      marginTop: 4,
                                      opacity: 0.5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'10:20 PM'}
                                </Text>
                                <>
                                  {!(listData?.id < 3) ? null : (
                                    <Circle
                                      bgColor={theme.colors['Primary']}
                                      size={20}
                                    >
                                      {/* Unread count ~ */}
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors['Custom Color_2'],
                                            fontFamily: 'Inter_500Medium',
                                            fontSize: 12,
                                            lineHeight: 20,
                                            opacity: 1,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.id}
                                      </Text>
                                    </Circle>
                                  )}
                                </>
                              </View>
                            </View>
                          </Touchable>
                        )}
                      </>
                      <>
                        {!(listData?.id > 2) ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('ChatOverScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['Custom Color'],
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['Divider'],
                                  borderRadius: 12,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: 12,
                                  paddingBottom: 18,
                                  paddingLeft: 15,
                                  paddingRight: 15,
                                  paddingTop: 18,
                                },
                                dimensions.width
                              )}
                            >
                              <View>
                                <CircleImage
                                  size={48}
                                  source={{ uri: `${listData?.avatar}` }}
                                />
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { flex: 1, marginLeft: 10, marginRight: 20 },
                                  dimensions.width
                                )}
                              >
                                {/* Name ~ */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 16,
                                      lineHeight: 20,
                                      marginTop: 4,
                                      opacity: 1,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Dr. '}
                                  {listData?.firstName}
                                </Text>
                                {/* Message ~ */}
                                <Text
                                  numberOfLines={1}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_300Light',
                                      fontSize: 12,
                                      lineHeight: 20,
                                      marginTop: 4,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { alignItems: 'flex-end' },
                                  dimensions.width
                                )}
                              >
                                {/* time ~! */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Medium'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 11,
                                      lineHeight: 20,
                                      marginBottom: 4,
                                      marginTop: 4,
                                      opacity: 0.5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'10:20 PM'}
                                </Text>
                                <>
                                  {!(listData?.id < 3) ? null : (
                                    <Circle
                                      bgColor={theme.colors['Primary']}
                                      size={20}
                                    >
                                      {/* Unread count ~ */}
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors['Custom Color_2'],
                                            fontFamily: 'Inter_500Medium',
                                            fontSize: 12,
                                            lineHeight: 20,
                                            opacity: 1,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.id}
                                      </Text>
                                    </Circle>
                                  )}
                                </>
                              </View>
                            </View>
                          </Touchable>
                        )}
                      </>
                    </>
                  );
                }}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
      </View>
      {/* Bottom Tab */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Custom #ffffff'],
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            flexDirection: 'row',
            height: 117,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
          },
          dimensions.width
        )}
      >
        {/* Home */}
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
              color={theme.colors['Medium']}
              name={'AntDesign/home'}
              size={24}
            />
          </View>
        </Touchable>
        {/* History Transaction */}
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HistoryTransactionScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
              color={theme.colors['Medium']}
              name={'Ionicons/document-text-outline'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Messages */}
        <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
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
              color={theme.colors['Primary']}
              name={'Ionicons/chatbox'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Profile */}
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'ProfileScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
              color={theme.colors['Medium']}
              name={'AntDesign/user'}
              size={24}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MessagesScreen);
