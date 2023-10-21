import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Icon,
  ScreenContainer,
  StarRating,
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

const DoctorDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
          {'Detail Doctor'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* About Doctor */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderRadius: 12,
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
          {/* Top Section */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Doctor}
              style={StyleSheet.applyWidth(
                { height: 168, width: 120 },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 20 },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
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
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Throat – Head Neck'}
              </Text>
              {/* Rating */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', marginTop: 18 },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom Color_5']}
                  name={'FontAwesome/star'}
                  size={20}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { marginLeft: 15 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_300Light',
                        opacity: 0.5,
                      },
                      dimensions.width
                    )}
                  >
                    {'Rating'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 15,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'4.9 out of 5'}
                  </Text>
                </View>
              </View>
              {/* Location */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', marginTop: 18 },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Primary']}
                  name={'Ionicons/location-outline'}
                  size={25}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { marginLeft: 15 },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_300Light',
                        opacity: 0.5,
                      },
                      dimensions.width
                    )}
                  >
                    {'Location'}
                  </Text>

                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Inter_400Regular',
                        fontSize: 15,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Wapa Hospital'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 14 },
              dimensions.width
            )}
          >
            {/* Patient */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderRightWidth: 1,
                  flex: 1,
                  marginRight: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_300Light',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Patient'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    marginTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'150'}
              </Text>
            </View>
            {/* Reviews */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderRightWidth: 1,
                  flex: 1,
                  marginRight: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_300Light',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Reviews'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    marginTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'120'}
              </Text>
            </View>
            {/* Experiance */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_300Light',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Experience'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    marginTop: 8,
                  },
                  dimensions.width
                )}
              >
                {'15 Years'}
              </Text>
            </View>
          </View>
        </View>
        {/* Appointment */}
        <>
          {!Constants['chatdoc'] ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 12,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                },
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
                    height: 80,
                    paddingBottom: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 20,
                  },
                  dimensions.width
                )}
              >
                {/* header */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Inter_400Regular',
                      marginBottom: 3,
                      opacity: 0.5,
                    },
                    dimensions.width
                  )}
                >
                  {'Price'}
                </Text>
                {/* Fee */}
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
                  {'Rp. 300.000'}
                  {/* Fee */}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color'],
                        fontFamily: 'Inter_300Light',
                        fontSize: 13,
                        marginBottom: 6,
                        marginLeft: 10,
                        opacity: 0.8,
                        textDecorationLine: 'line-through',
                      },
                      dimensions.width
                    )}
                  >
                    {'Rp. 350.000'}
                  </Text>
                </Text>
              </View>
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
          )}
        </>
        {/* Demography */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Heading */}
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
              {'Demography'}
            </Text>
          </View>
          {/* Details */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  lineHeight: 18,
                  opacity: 0.75,
                },
                dimensions.width
              )}
            >
              {
                'Dr. Usman Khajol is an Ear Nose Throat – Head Neck Specialist who is actively serving patients at Wapa Hospital... '
              }
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                    lineHeight: 18,
                  },
                  dimensions.width
                )}
              >
                {' Read More'}
              </Text>
            </Text>
          </View>
        </View>
        {/* Practice Location */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Heading */}
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
              {'Practice Location'}
            </Text>
          </View>
          {/* Location */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
                height: 244,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Address */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 13,
                  opacity: 0.6,
                },
                dimensions.width
              )}
            >
              {
                'Jl. Tangkuban Perahu No.31-33, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119'
              }
            </Text>

            <MapView
              apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
              latitude={37.4095}
              loadingEnabled={true}
              longitude={122.0994}
              mapType={'standard'}
              provider={'google'}
              rotateEnabled={true}
              scrollEnabled={true}
              showsPointsOfInterest={true}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  marginTop: 10,
                },
                dimensions.width
              )}
              zoom={12}
              zoomEnabled={true}
            >
              <MapMarker
                latitude={37.4095}
                longitude={122.0994}
                title={'Wapa Hospital'}
              />
            </MapView>
          </View>
        </View>
        {/* Reviews */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Heading */}
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
              {'Reviews (120)'}
            </Text>
            {/* See All */}
            <Touchable>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'See More'}
              </Text>
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
                overflow: 'hidden',
              },
              dimensions.width
            )}
          >
            {/* reviews list */}
            <DraftbitExampleApi.FetchDoctorsListGET count={6}>
              {({ loading, error, data, refetchDoctorsList }) => {
                const reviewsListData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <FlashList
                    contentContainerStyle={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['Custom Color'],
                        borderRadius: 12,
                        overflow: 'hidden',
                        paddingBottom: 10,
                        paddingTop: 10,
                      },
                      dimensions.width
                    )}
                    data={reviewsListData}
                    estimatedItemSize={50}
                    keyExtractor={flashListData =>
                      flashListData?.id ||
                      flashListData?.uuid ||
                      JSON.stringify(flashListData)
                    }
                    listKey={'qTRMFzDk'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: theme.colors['Custom Color'],
                              flexDirection: 'row',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            source={{ uri: `${flashListData?.avatar}` }}
                            style={StyleSheet.applyWidth(
                              { borderRadius: 12, height: 52, width: 52 },
                              dimensions.width
                            )}
                          />
                          {/* Details */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, marginLeft: 20 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                },
                                dimensions.width
                              )}
                            >
                              <View>
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
                                  {flashListData?.first_name}
                                </Text>
                                <StarRating
                                  activeColor={theme.colors['Custom Color_5']}
                                  defaultValue={flashListData?.id}
                                  inactiveColor={theme.colors.divider}
                                  maxStars={5}
                                  starSize={16}
                                  style={StyleSheet.applyWidth(
                                    { marginTop: 4 },
                                    dimensions.width
                                  )}
                                />
                              </View>
                              {/* timestamp */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_300Light',
                                    fontSize: 12,
                                    opacity: 0.7,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Today'}
                              </Text>
                            </View>
                            {/* Review */}
                            <Text
                              numberOfLines={3}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'Inter_300Light',
                                  fontSize: 13,
                                  lineHeight: 16,
                                  marginTop: 8,
                                  opacity: 0.6,
                                },
                                dimensions.width
                              )}
                            >
                              {flashListData?.bio}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                );
              }}
            </DraftbitExampleApi.FetchDoctorsListGET>
          </View>
        </View>
        {/* Make Apppointment */}
        <>
          {Constants['chatdoc'] ? null : (
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
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  height: 52,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 35,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Make Appointment '}
            />
          )}
        </>
        {/* Chat Doctor */}
        <>
          {!Constants['chatdoc'] ? null : (
            <Button
              onPress={() => {
                try {
                  navigation.navigate('PaymentScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.primary,
                  borderRadius: 12,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  height: 52,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 35,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Chat Doctor'}
            />
          )}
        </>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(DoctorDetailsScreen);
