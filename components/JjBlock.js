import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const JjBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
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
  );
};

export default withTheme(JjBlock);
