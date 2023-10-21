import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const Hdr2Block = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
        dimensions.width
      )}
    >
      {/* Back btn */}
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 44,
              justifyContent: 'center',
              width: 44,
            },
            dimensions.width
          )}
        >
          <Icon name={'AntDesign/arrowleft'} size={24} />
        </View>
      </Touchable>
      {/* Screen Heading */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_500Medium',
            fontSize: 16,
            marginLeft: 10,
          },
          dimensions.width
        )}
      >
        {'Doctor'}
      </Text>
    </View>
  );
};

export default withTheme(Hdr2Block);
