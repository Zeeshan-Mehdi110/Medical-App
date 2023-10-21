import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
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

const PaymentInstructionScreen = props => {
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
          {'Payment Instructions'}
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
        {/* Payment Summary */}
        <View>
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
            {/* Payment Number */}
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
                {'Payment Number'}
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
                {'VT2021TTSP7721'}
              </Text>
            </View>
            {/* Payment Order */}
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
                {'Payment Order'}
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
                {'NO001'}
              </Text>
            </View>
            {/* Payment Date */}
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
                {'Payment Date'}
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
                {'Jumat, 4 Agustus 2021 (09.45)'}
              </Text>
            </View>
            {/* Grace period */}
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
                {'Grace period'}
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
                {'Sabtu, 5 Agustus 2021 (09.45)'}
              </Text>
            </View>
          </View>
        </View>
        {/* Pay the bill before */}
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
              {'Pay the bill before'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginTop: 8,
                },
                dimensions.width
              )}
            >
              {'23 Hour 59 Minute 52 Second'}
            </Text>
          </View>
        </View>
        {/* Total Bill */}
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
              {'Total Bill'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginTop: 8,
                },
                dimensions.width
              )}
            >
              {'Rp.50.000.000'}
            </Text>
          </View>
        </View>
        {/* Payment Method details */}
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
            {/* Logo */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', marginBottom: 10 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.PayMethod}
                style={StyleSheet.applyWidth(
                  { height: 36, width: 120 },
                  dimensions.width
                )}
              />
            </View>
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  opacity: 0.6,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Virtual account Number'}
            </Text>
            {/* Account number */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginTop: 8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'872873718288321123'}
            </Text>
            {/* Copy Code */}
            <Button
              activeOpacity={0.8}
              disabledOpacity={0.8}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Divider'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Medium'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: '30%',
                  marginRight: '30%',
                  marginTop: 15,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Copy Code '}
            />
          </View>
        </View>
        {/* Instructions */}
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
              {'Instructions'}
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
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  marginBottom: 10,
                  opacity: 0.6,
                },
                dimensions.width
              )}
            >
              {
                '1. Select Transfer\n\n2. Select Virtual Account\n\n3. Input the Virtual Account Number and select YES\n\n4. Select Yes to proceed the payment\n\n5. Finish\n'
              }
            </Text>
          </View>
        </View>
        {/* Back to Home */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('PaymentConfirmationScreen');
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
          title={'Back to Home '}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PaymentInstructionScreen);
