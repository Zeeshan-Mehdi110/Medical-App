import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const PaymentConfirmationScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Primary'], justifyContent: 'center' },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Custom Color'],
            borderRadius: 12,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 60,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.PaymentSuccess}
          style={StyleSheet.applyWidth(
            { height: 100, position: 'absolute', top: -50, width: 100 },
            dimensions.width
          )}
        />
        {/* Messages */}
        <View>
          {/* Title */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'You have successfully made a payment'}
          </Text>
          {/* message */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_300Light',
                lineHeight: 18,
                marginTop: 6,
                opacity: 0.6,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Now you can start consulting with the doctor you choose'}
          </Text>
        </View>
        {/* Doctor Details */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginBottom: 50, marginTop: 50 },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'center'}
            source={Images.Doctor}
            style={StyleSheet.applyWidth(
              { borderRadius: 12, height: 76, marginBottom: 12, width: 76 },
              dimensions.width
            )}
          />
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
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
                color: theme.colors['Strong'],
                fontFamily: 'Inter_300Light',
                lineHeight: 18,
                marginTop: 2,
                opacity: 0.6,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Throat – Head Neck'}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Back to Home */}
          <Button
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
                height: 52,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Back to Home'}
          />
          {/* Chat Doctor */}
          <Button
            activeOpacity={0.8}
            disabledOpacity={0.8}
            onPress={() => {
              try {
                navigation.navigate('ChatScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 12,
                fontFamily: 'Inter_700Bold',
                height: 52,
                marginTop: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Chat Doctor'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PaymentConfirmationScreen);
