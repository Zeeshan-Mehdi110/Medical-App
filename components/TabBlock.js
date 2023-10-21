import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const TabBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom #ffffff'],
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          flexDirection: 'row',
          height: 117,
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: 30,
          paddingRight: 30,
        },
        dimensions.width
      )}
    >
      {/* Home */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Medium']}
            name={'AntDesign/home'}
            size={24}
          />
        </View>
      </Touchable>
      {/* History Transaction */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Medium']}
            name={'Ionicons/document-text-outline'}
            size={24}
          />
        </View>
      </Touchable>
      {/* Messages */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Medium']}
            name={'Ionicons/chatbox-outline'}
            size={24}
          />
        </View>
      </Touchable>
      {/* Profile */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'AntDesign/user'}
            size={24}
          />
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(TabBlock);
