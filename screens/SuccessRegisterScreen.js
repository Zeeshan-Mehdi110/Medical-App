import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const SuccessRegisterScreen = props => {
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
      {/* Logo */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.RegisterSuccess}
          style={StyleSheet.applyWidth(
            { height: 100, marginBottom: 30, width: 100 },
            dimensions.width
          )}
        />
      </View>
      {/* msg */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color'],
            fontFamily: 'Inter_500Medium',
            fontSize: 18,
            lineHeight: 25,
            opacity: 0.95,
            paddingLeft: 25,
            paddingRight: 25,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'You have successfully registered in the Draftbit Doc application'}
      </Text>
      {/* Get Started */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('BottomTabNavigator', { screen: 'HomeScreen' });
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderRadius: 12,
            color: theme.colors['Strong'],
            fontFamily: 'Inter_500Medium',
            fontSize: 16,
            height: 52,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 35,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Get Started'}
      />
    </ScreenContainer>
  );
};

export default withTheme(SuccessRegisterScreen);
