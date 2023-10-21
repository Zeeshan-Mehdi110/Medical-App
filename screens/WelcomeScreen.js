import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const WelcomeScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Top Image */}
      <Image
        resizeMode={'cover'}
        source={Images.Welcome}
        style={StyleSheet.applyWidth(
          { height: '45%', width: '100%' },
          dimensions.width
        )}
      />
      {/* Blue Round View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            bottom: 0,
            height: '55%',
            left: 0,
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
              color: theme.colors['Strong'],
              fontFamily: 'Inter_500Medium',
              fontSize: 23,
              marginTop: 60,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Let’s get started'}
        </Text>
        {/* Description */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Inter_300Light',
              marginTop: 8,
              opacity: 0.5,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'We happy to see you again'}
        </Text>
        {/* Phone Sign In */}
        <Button
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'OnboardingFlow',
                value: 'login',
              });
              navigation.navigate('LoginScreen');
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
              marginTop: 25,
              textAlign: 'center',
              width: '86%',
            },
            dimensions.width
          )}
          title={'Sign in with phone number'}
        />
        {/* Continue with Google */}
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
              height: 52,
              justifyContent: 'center',
              marginTop: 20,
              width: '86%',
            },
            dimensions.width
          )}
        >
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Google}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Google'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* Sign Up */}
        <Touchable
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'OnboardingFlow',
                value: 'signup',
              });
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Strong'],
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 10,
                  opacity: 0.5,
                },
                dimensions.width
              )}
            >
              {'Don’t have an account?'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Primary'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: 5,
                },
                dimensions.width
              )}
            >
              {'Sign up'}
            </Text>
          </View>
        </Touchable>
        {/* Disclaimer */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 15,
              opacity: 0.6,
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
                lineHeight: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'By signing up or logging in, i accept the apps '}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            {/* Terms of service */}
            <Touchable>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                    lineHeight: 20,
                    opacity: 1,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Terms of service'}
              </Text>
            </Touchable>
            {/* and */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 13,
                  lineHeight: 20,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {' and '}
            </Text>
            {/* Privacy policy */}
            <Touchable>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                    lineHeight: 20,
                    opacity: 1,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Privacy policy'}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
