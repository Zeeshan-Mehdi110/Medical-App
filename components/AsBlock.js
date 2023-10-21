import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AsBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_6'],
          borderRadius: 4,
          flexDirection: 'row',
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 15,
          paddingTop: 10,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Primary']}
        name={'Ionicons/ios-information-circle-outline'}
        size={20}
      />
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_300Light',
            fontSize: 12,
            marginLeft: 10,
          },
          dimensions.width
        )}
      >
        {"Please enter the details according to the patient's ID card"}
      </Text>
    </View>
  );
};

export default withTheme(AsBlock);
