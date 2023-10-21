import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const HsptlBlock = props => {
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
        source={{ uri: 'https://picsum.photos/64' }}
        style={StyleSheet.applyWidth(
          { borderRadius: 4, height: 80, width: 80 },
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginLeft: 15 },
          dimensions.width
        )}
      >
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
          {null}
          {' Hospital'}
        </Text>

        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_300Light',
              fontSize: 12,
              marginTop: 5,
              opacity: 0.7,
            },
            dimensions.width
          )}
        >
          {'Jl. Prapatan No 26, Labuan, Malang'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'FontAwesome/location-arrow'}
            size={20}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Primary'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginLeft: 5,
              },
              dimensions.width
            )}
          >
            {null}
            {' KM'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(HsptlBlock);
