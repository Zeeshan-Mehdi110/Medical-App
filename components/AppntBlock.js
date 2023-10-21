import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const AppntBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { borderRadius: 12, marginLeft: 20, marginRight: 20 },
        dimensions.width
      )}
    >
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Primary'],
            borderRadius: 12,
            flexDirection: 'column',
            height: 160,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Doctor detail */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Doctor}
            style={StyleSheet.applyWidth(
              { borderRadius: 26, height: 52, width: 52 },
              dimensions.width
            )}
          />
          {/* Details */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginLeft: 12 },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                  marginBottom: 6,
                },
                dimensions.width
              )}
            >
              {'Dr. Usman Khajol'}
            </Text>
            {/* Speciality */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_400Regular',
                  opacity: 0.5,
                },
                dimensions.width
              )}
            >
              {'Throat – Head Neck'}
            </Text>
          </View>
          {/* Queue */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                  marginBottom: 6,
                },
                dimensions.width
              )}
            >
              {'4'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_300Light',
                },
                dimensions.width
              )}
            >
              {'Queue'}
            </Text>
          </View>
        </View>
        {/* Slot */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color_8'],
              borderRadius: 8,
              flexDirection: 'row',
              height: 48,
              marginTop: 18,
            },
            dimensions.width
          )}
        >
          {/* Date */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginLeft: 15 },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom Color']}
              name={'Feather/calendar'}
              size={14}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  marginLeft: 6,
                },
                dimensions.width
              )}
            >
              {'Sunday, June 12, 2022'}
            </Text>
          </View>
          {/* Time */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginLeft: 15 },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom Color']}
              name={'MaterialCommunityIcons/clock-time-three-outline'}
              size={14}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  marginLeft: 6,
                },
                dimensions.width
              )}
            >
              {'18:00 - 20:00'}
            </Text>
          </View>
        </View>
      </View>
      {/* Shadow View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color_9'],
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: 10,
            marginLeft: 10,
            marginRight: 10,
          },
          dimensions.width
        )}
      />
      {/* Shadow View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color_10'],
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: 10,
            marginLeft: 20,
            marginRight: 20,
          },
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(AppntBlock);
