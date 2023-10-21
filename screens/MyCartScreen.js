import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  IconButton,
  ScreenContainer,
  Stepper,
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

const MyCartScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textAreaValue, setTextAreaValue] = React.useState('');

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
        <Touchable>
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
          {'My Cart'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Cart Items */}
        <DraftbitExampleApi.FetchDoctorsListGET count={2}>
          {({ loading, error, data, refetchDoctorsList }) => {
            const cartItemsData = data?.json;
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
                data={cartItemsData}
                estimatedItemSize={50}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'PLV7cVPC'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Custom #ffffff'],
                          borderRadius: 12,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginLeft: 20,
                          marginRight: 20,
                          marginTop: 20,
                          paddingBottom: 12,
                          paddingLeft: 12,
                          paddingRight: 12,
                          paddingTop: 12,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={Images.Medicines}
                        style={StyleSheet.applyWidth(
                          { height: 80, width: 80 },
                          dimensions.width
                        )}
                      />
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1, paddingLeft: 12 },
                          dimensions.width
                        )}
                      >
                        {/* Name */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'Inter_400Regular',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Woods Papermint'}
                        </Text>
                        {/* Price */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Primary'],
                              fontFamily: 'Inter_400Regular',
                              fontSize: 13,
                              marginTop: 4,
                            },
                            dimensions.width
                          )}
                        >
                          {'Rp20.000'}
                        </Text>
                        <Stepper
                          defaultValue={1}
                          iconColor={theme.colors.strong}
                          iconSize={24}
                          max={6}
                          min={1}
                          style={StyleSheet.applyWidth(
                            {
                              fontFamily: 'Inter_400Regular',
                              fontSize: 13,
                              marginTop: 12,
                              opacity: 0.8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                      <IconButton
                        color={theme.colors['Medium']}
                        icon={'MaterialCommunityIcons/dots-vertical'}
                        size={26}
                      />
                    </View>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </DraftbitExampleApi.FetchDoctorsListGET>
        {/* Deliver Location */}
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
              {'Deliver Location'}
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
              {
                'Jl. Perahu No.31-33, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119'
              }
            </Text>
            {/* Change Location */}
            <Touchable
              activeOpacity={0.8}
              disabledOpacity={0.8}
              style={StyleSheet.applyWidth({ marginTop: 12 }, dimensions.width)}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                  },
                  dimensions.width
                )}
              >
                {'Change Location'}
              </Text>
            </Touchable>
          </View>
        </View>
        {/* Note */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
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
              {'Note'}
            </Text>
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
              placeholder={'Enter note here'}
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
                  height: 100,
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingRight: 8,
                  paddingTop: 10,
                },
                dimensions.width
              )}
              textAlignVertical={'top'}
              value={textAreaValue}
            />
          </View>
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
            {/* Sub Total */}
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
                {'Sub Total'}
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
            {/* shipping cost */}
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
                {'shipping cost '}
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
        {/* Order Now */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('MedicineSearchingScreen');
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
          title={'Order Now'}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MyCartScreen);
