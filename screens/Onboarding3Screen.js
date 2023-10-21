import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const Onboarding3Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Top Image */}
      <Image
        resizeMode={'contain'}
        source={Images.Onboarding3}
        style={StyleSheet.applyWidth(
          {
            height: '40%',
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5%',
            width: '80%',
          },
          dimensions.width
        )}
      />
      {/* Blue Round View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Primary'],
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            bottom: 0,
            height: '50%',
            left: 0,
            paddingLeft: 20,
            paddingRight: 20,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Background'],
              fontFamily: 'Inter_500Medium',
              fontSize: 26,
              marginTop: 60,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Find your best Doctors'}
        </Text>
        {/* Description */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Background'],
              fontFamily: 'Inter_300Light',
              fontSize: 20,
              lineHeight: 28,
              marginTop: 15,
              opacity: 0.5,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {
            'We can help find a specialist for you, Many experienced doctors are ready to help'
          }
        </Text>
        {/* Next Btn */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'center',
              marginBottom: 40,
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('WelcomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Ob3Button}
              style={StyleSheet.applyWidth(
                { height: 88, width: 88 },
                dimensions.width
              )}
            />
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Onboarding3Screen);
