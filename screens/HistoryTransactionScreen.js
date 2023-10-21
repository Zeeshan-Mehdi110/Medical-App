import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HistoryTransactionScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            height: 48,
            marginBottom: 10,
            marginTop: 12,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 24,
            },
            dimensions.width
          )}
        >
          {'History Transaction'}
        </Text>
      </View>
      {/* Transactions */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <DraftbitExampleApi.FetchDoctorsListGET count={6}>
          {({ loading, error, data, refetchDoctorsList }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlashList
                data={fetchData}
                estimatedItemSize={50}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'YxlrUc8v'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'flex-start',
                          backgroundColor: theme.colors['Custom #ffffff'],
                          borderRadius: 12,
                          flexDirection: 'row',
                          marginBottom: 20,
                          marginLeft: 20,
                          marginRight: 20,
                          paddingBottom: 20,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 20,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: 'https://picsum.photos/64' }}
                        style={StyleSheet.applyWidth(
                          { borderRadius: 8, height: 64, width: 64 },
                          dimensions.width
                        )}
                      />
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1, marginLeft: 20 },
                          dimensions.width
                        )}
                      >
                        {/* Title */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_500Medium',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Buy 2 Medicine Woods Papermint'}
                        </Text>
                        {/* type  */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_300Light',
                              fontSize: 12,
                              marginTop: 4,
                              opacity: 0.6,
                            },
                            dimensions.width
                          )}
                        >
                          {'Medicine • Monday, 4:19 PM'}
                        </Text>
                        {/* Status Tags */}
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'flex-start' },
                            dimensions.width
                          )}
                        >
                          {/* Pending Payment */}
                          <>
                            {!(flashListData?.id === 1) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_19'],
                                    borderRadius: 5,
                                    marginTop: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_4'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      paddingBottom: 6,
                                      paddingLeft: 10,
                                      paddingRight: 10,
                                      paddingTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Pending Payment'}
                                </Text>
                              </View>
                            )}
                          </>
                          {/* Not Confirmed Yet */}
                          <>
                            {!(flashListData?.id === 3) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_7'],
                                    borderRadius: 5,
                                    marginTop: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      paddingBottom: 6,
                                      paddingLeft: 10,
                                      paddingRight: 10,
                                      paddingTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Not Confirmed Yet'}
                                </Text>
                              </View>
                            )}
                          </>
                          {/* Complete */}
                          <>
                            {!(flashListData?.id === 2) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_21'],
                                    borderRadius: 5,
                                    marginTop: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_20'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      paddingBottom: 6,
                                      paddingLeft: 10,
                                      paddingRight: 10,
                                      paddingTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Complete'}
                                </Text>
                              </View>
                            )}
                          </>
                          {/* Confirm */}
                          <>
                            {!(flashListData?.id > 3) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_21'],
                                    borderRadius: 5,
                                    marginTop: 16,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_20'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      paddingBottom: 6,
                                      paddingLeft: 10,
                                      paddingRight: 10,
                                      paddingTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Confirm'}
                                </Text>
                              </View>
                            )}
                          </>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            );
          }}
        </DraftbitExampleApi.FetchDoctorsListGET>
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
              name={'Ionicons/document-text'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Messages */}
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'MessagesScreen',
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
              name={'Ionicons/chatbox-outline'}
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

export default withTheme(HistoryTransactionScreen);
