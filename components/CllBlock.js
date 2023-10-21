import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const CllBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color'],
          borderRadius: 12,
          flexDirection: 'row',
          height: 104,
          paddingLeft: 12,
        },
        dimensions.width
      )}
    >
      <Image
        resizeMode={'cover'}
        source={{ uri: '' }}
        style={StyleSheet.applyWidth(
          { borderRadius: 4, height: 80, width: 80 },
          dimensions.width
        )}
      />
      <View style={StyleSheet.applyWidth({ marginLeft: 15 }, dimensions.width)}>
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
          {'Dr. '}
          {null}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_300Light',
              marginTop: 5,
              opacity: 0.7,
            },
            dimensions.width
          )}
        >
          {'Cardiologi Specialist'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Custom Color_5']}
            name={'FontAwesome/star'}
            size={20}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_300Light',
                fontSize: 12,
                marginLeft: 5,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'4.9'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'  •  150 Reviews'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(CllBlock);
