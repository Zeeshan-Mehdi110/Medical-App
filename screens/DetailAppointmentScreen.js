import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const DetailAppointmentScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

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
          {'Detail Appointment'}
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
        {/* Appointment */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 12, marginLeft: 20, marginRight: 20 },
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
        {/* QR Code */}
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
                marginBottom: 20,
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
              {'QR Code'}
            </Text>
          </View>
          {/* QR */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
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
            <Image
              resizeMode={'cover'}
              source={Images.QrCode}
              style={StyleSheet.applyWidth(
                { height: 240, width: 240 },
                dimensions.width
              )}
            />
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
                marginBottom: 20,
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

            <View
              style={StyleSheet.applyWidth(
                { height: 200, paddingBottom: 20 },
                dimensions.width
              )}
            >
              <MapView
                apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
                latitude={37.4095}
                loadingEnabled={true}
                longitude={122.0994}
                mapType={'standard'}
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
                    height: '60%',
                    marginTop: 10,
                    width: '100%',
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
        </View>
        {/* Appointment status */}
        <View>
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 25,
                paddingLeft: 20,
                paddingRight: 20,
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
              {'Appointment status'}
            </Text>
          </View>
          {/* Details */}
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
            {/* Created Date */}
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
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Created Date'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Sunday, June 12, 2022'}
              </Text>
            </View>
            {/* Status */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Status'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color_7'],
                    borderRadius: 4,
                    height: 26,
                    justifyContent: 'center',
                    paddingLeft: 8,
                    paddingRight: 8,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 13,
                      opacity: 0.5,
                      textAlign: 'right',
                    },
                    dimensions.width
                  )}
                >
                  {'Not Confirmed Yet'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Doctor Information */}
        <View>
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 25,
                paddingLeft: 20,
                paddingRight: 20,
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
              {'Doctor Information'}
            </Text>
          </View>

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
            {/* Name */}
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
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Doctor Name'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Dr. Usman Khajol'}
              </Text>
            </View>
            {/* Speciality */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Specialist'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Throat – Head Neck'}
              </Text>
            </View>
            {/* Location */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Practice Place'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Wapa Hospital'}
              </Text>
            </View>
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Address'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Lowokwaru street'}
              </Text>
            </View>
          </View>
        </View>
        {/* Patient Information */}
        <View>
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 25,
                paddingLeft: 20,
                paddingRight: 20,
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
              {'Patient Information'}
            </Text>
          </View>

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
            {/* Name */}
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
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Patient Name'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Thomas Slebew'}
              </Text>
            </View>
            {/* Age */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Age'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'22 Years'}
              </Text>
            </View>
            {/* Gender */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Gender'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Male'}
              </Text>
            </View>
            {/* Phone Number */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Phone Number'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'0821 32224 9231'}
              </Text>
            </View>
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors.strong, fontFamily: 'Inter_500Medium' },
                  dimensions.width
                )}
              >
                {'Address'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    opacity: 0.5,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Ngalam Natales Street'}
              </Text>
            </View>
          </View>
        </View>
        {/* Cancel Appointment */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
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
              marginLeft: 20,
              marginRight: 20,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Cancel Appointment'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(DetailAppointmentScreen);
