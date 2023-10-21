import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [showappointment, setShowappointment] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

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
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            paddingBottom: 15,
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
          <Circle size={50}>
            <Image
              resizeMode={'cover'}
              source={Images._110018039172986949684485436414439043430420N}
              style={StyleSheet.applyWidth(
                { height: 50, width: 50 },
                dimensions.width
              )}
            />
          </Circle>

          <View
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Hello Thomas,'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  marginTop: 2,
                  opacity: 0.5,
                },
                dimensions.width
              )}
            >
              {'How are you today?'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('NotificationsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            name={'Ionicons/ios-notifications-outline'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
        </Touchable>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Search Bar */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 48,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Icon
            name={'EvilIcons/search'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Search doctor or health issues..'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                fontFamily: 'Inter_400Regular',
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
                width: '80%',
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Let’s Make an appointment */}
        <>
          {showappointment ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderRadius: 12,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 20,
                },
                dimensions.width
              )}
            >
              {/* Title */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 18,
                  },
                  dimensions.width
                )}
              >
                {'Let’s Make an appointment'}
              </Text>
              {/* Sub title */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_300Light',
                    fontSize: 12,
                    marginTop: 5,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Choose your best specialist doctor'}
              </Text>
              {/* Choose Doctor */}
              <Button
                onPress={() => {
                  try {
                    setShowappointment(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.primary,
                    borderRadius: 8,
                    fontFamily: 'Inter_400Regular',
                    height: 36,
                    marginTop: 20,
                    textAlign: 'center',
                    width: '45%',
                  },
                  dimensions.width
                )}
                title={'Choose Doctor '}
              />
            </View>
          )}
        </>
        {/* Appointments */}
        <>
          {!showappointment ? null : (
            <View
              style={StyleSheet.applyWidth(
                { marginTop: 30, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              {/* Header */}
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
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 18,
                    },
                    dimensions.width
                  )}
                >
                  {'Your Appointment'}
                </Text>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('DetailAppointmentScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Primary'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 15,
                      },
                      dimensions.width
                    )}
                  >
                    {'See More'}
                  </Text>
                </Touchable>
              </View>
              {/* Appointment */}
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 12, marginTop: 16 },
                  dimensions.width
                )}
              >
                {/* Details */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 12,
                      flexDirection: 'column',
                      height: 160,
                      paddingBottom: 20,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 20,
                    },
                    dimensions.width
                  )}
                >
                  {/* Doctor detail */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.Doctor}
                      style={StyleSheet.applyWidth(
                        { borderRadius: 26, height: 52, width: 52 },
                        dimensions.width
                      )}
                    />
                    {/* Details */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, marginLeft: 12 },
                        dimensions.width
                      )}
                    >
                      {/* Name */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color'],
                            fontFamily: 'Inter_500Medium',
                            fontSize: 17,
                            marginBottom: 6,
                          },
                          dimensions.width
                        )}
                      >
                        {'Dr. Usman Khajol'}
                      </Text>
                      {/* Speciality */}
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color'],
                            fontFamily: 'Inter_400Regular',
                            opacity: 0.5,
                          },
                          dimensions.width
                        )}
                      >
                        {'Throat – Head Neck'}
                      </Text>
                    </View>
                    {/* Queue */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', justifyContent: 'center' },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color'],
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 17,
                            marginBottom: 6,
                          },
                          dimensions.width
                        )}
                      >
                        {'4'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color'],
                            fontFamily: 'Inter_300Light',
                          },
                          dimensions.width
                        )}
                      >
                        {'Queue'}
                      </Text>
                    </View>
                  </View>
                  {/* Slot */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors['Custom Color_8'],
                        borderRadius: 8,
                        flexDirection: 'row',
                        height: 48,
                        marginTop: 18,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Date */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginLeft: 15,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Custom Color']}
                        name={'Feather/calendar'}
                        size={14}
                      />
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color'],
                            fontFamily: 'Inter_300Light',
                            fontSize: 12,
                            marginLeft: 6,
                          },
                          dimensions.width
                        )}
                      >
                        {'Sunday, June 12, 2022'}
                      </Text>
                    </View>
                    {/* Time */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginLeft: 15,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Custom Color']}
                        name={'MaterialCommunityIcons/clock-time-three-outline'}
                        size={14}
                      />
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Custom Color'],
                            fontFamily: 'Inter_300Light',
                            fontSize: 12,
                            marginLeft: 6,
                          },
                          dimensions.width
                        )}
                      >
                        {'18:00 - 20:00'}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Shadow View */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_9'],
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                      height: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    },
                    dimensions.width
                  )}
                />
                {/* Shadow View */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Custom Color_10'],
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                      height: 10,
                      marginLeft: 20,
                      marginRight: 20,
                    },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          )}
        </>
        {/* Category */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 30, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Category'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Appointment */}
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'chatdoc',
                    value: false,
                  });
                  navigation.navigate('DoctorsListScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Appointment}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 74 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 5,
                      opacity: 0.5,
                    },
                    dimensions.width
                  )}
                >
                  {'Appoinment'}
                </Text>
              </View>
            </Touchable>
            {/* Medicine */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ListMedicineScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Medicine}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 74 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 5,
                      opacity: 0.5,
                    },
                    dimensions.width
                  )}
                >
                  {'Medicine'}
                </Text>
              </View>
            </Touchable>
            {/* Chat Doctor */}
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'chatdoc',
                    value: true,
                  });
                  navigation.navigate('ChooseDoctorScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.ChatDoctor}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 74 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 5,
                      opacity: 0.5,
                    },
                    dimensions.width
                  )}
                >
                  {'Chat Doctor'}
                </Text>
              </View>
            </Touchable>
            {/* Hospital */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ListnearesthospitalScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center' },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Hospital}
                  style={StyleSheet.applyWidth(
                    { height: 72, width: 74 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 5,
                      opacity: 0.5,
                    },
                    dimensions.width
                  )}
                >
                  {'Hospital'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Available Doctors */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, marginTop: 30, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 12,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Available Doctors'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'chatdoc',
                    value: false,
                  });
                  navigation.navigate('DoctorsListScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                  },
                  dimensions.width
                )}
              >
                {'See More'}
              </Text>
            </Touchable>
          </View>
          {/* Doctors */}
          <DraftbitExampleApi.FetchDoctorsListGET count={6}>
            {({ loading, error, data, refetchDoctorsList }) => {
              const doctorsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={doctorsData}
                  estimatedItemSize={50}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'WVdtz0va'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'chatdoc',
                              value: false,
                            });
                            navigation.navigate('DoctorDetailsScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginBottom: 10, marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors['Custom Color'],
                              borderRadius: 12,
                              flexDirection: 'row',
                              height: 104,
                              paddingLeft: 12,
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.avatar}` }}
                            style={StyleSheet.applyWidth(
                              { borderRadius: 4, height: 80, width: 80 },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { marginLeft: 15 },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
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
                              {'Dr. '}
                              {flashListData?.full_name}
                            </Text>
                            {/* Speciality */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_300Light',
                                  marginTop: 5,
                                  opacity: 0.7,
                                },
                                dimensions.width
                              )}
                            >
                              {'Cardiologi Specialist'}
                            </Text>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  marginTop: 12,
                                },
                                dimensions.width
                              )}
                            >
                              <Icon
                                color={theme.colors['Custom Color_5']}
                                name={'FontAwesome/star'}
                                size={20}
                              />
                              {/* Rating */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_300Light',
                                    fontSize: 12,
                                    marginLeft: 5,
                                    opacity: 0.7,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'4.9'}
                              </Text>
                              {/* Reviews count */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 12,
                                    opacity: 0.7,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'  •  150 Reviews'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              );
            }}
          </DraftbitExampleApi.FetchDoctorsListGET>
        </View>
      </ScrollView>
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
              name={'Entypo/home'}
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

export default withTheme(HomeScreen);
