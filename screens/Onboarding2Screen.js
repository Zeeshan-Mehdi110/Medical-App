import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const Onboarding2Screen = props => {
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
        resizeMode={'cover'}
        source={Images.Onboarding2}
        style={StyleSheet.applyWidth(
          { height: '55%', width: '100%' },
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
          {'Consult with doctor'}
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
            'Consult your illness with a specialist, without the need to come to the hospital.'
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
                navigation.navigate('Onboarding3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Ob2Button}
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

export default withTheme(Onboarding2Screen);
