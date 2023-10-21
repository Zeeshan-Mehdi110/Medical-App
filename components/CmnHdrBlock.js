import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const CmnHdrBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { justifyContent: 'center', paddingLeft: 20 },
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
    </View>
  );
};

export default withTheme(CmnHdrBlock);
