import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
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

const PaymentScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(1);

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
          {'Payment'}
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
        {/* Payment Methods */}
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
              {'Select Payment Method'}
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
                {'See All'}
              </Text>
            </Touchable>
          </View>

          <RadioButtonGroup
            onValueChange={newRadioButtonGroupValue => {
              try {
                setRadioButtonGroupValue(newRadioButtonGroupValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={radioButtonGroupValue}
          >
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
              {/* Payment Methods */}
              <DraftbitExampleApi.FetchDoctorsListGET count={4}>
                {({ loading, error, data, refetchDoctorsList }) => {
                  const paymentMethodsData = data?.json;
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
                      data={paymentMethodsData}
                      estimatedItemSize={50}
                      keyExtractor={flashListData =>
                        flashListData?.id ||
                        flashListData?.uuid ||
                        JSON.stringify(flashListData)
                      }
                      listKey={'jZM2Xar5'}
                      numColumns={1}
                      renderItem={({ item }) => {
                        const flashListData = item;
                        return (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['Custom Color'],
                                flexDirection: 'row',
                                height: 64,
                                justifyContent: 'space-between',
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
                              source={Images.PayMethod}
                              style={StyleSheet.applyWidth(
                                { height: 18, width: 60 },
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <RadioButtonRow
                                color={theme.colors.primary}
                                label={'Kartu Kredit'}
                                style={StyleSheet.applyWidth(
                                  {
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 16,
                                  },
                                  dimensions.width
                                )}
                                unselectedColor={theme.colors.primary}
                                value={flashListData?.id}
                              />
                            </View>
                          </View>
                        );
                      }}
                    />
                  );
                }}
              </DraftbitExampleApi.FetchDoctorsListGET>
            </View>
          </RadioButtonGroup>
        </View>
        {/* Payment Summary */}
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
              {'Payment Summary'}
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
            {/* Consultation Fee */}
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
                    fontFamily: 'Inter_300Light',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'Consultation Fee'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Rp 300.000'}
              </Text>
            </View>
            {/* Admin Fee */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
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
                {'Admin Fee'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Free'}
              </Text>
            </View>
            {/* Discount */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
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
                {'Discount'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Rp.10.000'}
              </Text>
            </View>
            {/* Total */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
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
                {'Total'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 13,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Rp 290.000'}
              </Text>
            </View>
          </View>
        </View>
        {/* Pay */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('PaymentInstructionScreen');
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
          title={'Pay'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PaymentScreen);
