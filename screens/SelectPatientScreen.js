import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const SelectPatientScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
          {'Select Patient'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderRadius: 12,
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images._110018039172986949684485436414439043430420N}
            style={StyleSheet.applyWidth(
              { borderRadius: 4, height: 64, width: 64 },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                  marginBottom: 5,
                },
                dimensions.width
              )}
            >
              {'Thomas Slebew'}
            </Text>
            {/* main profile */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 12,
                  opacity: 0.4,
                },
                dimensions.width
              )}
            >
              {'Main Profile'}
            </Text>
          </View>
        </View>
        {/* Select Another Profile */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('SelectProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 6,
              borderRightWidth: 1,
              borderTopWidth: 1,
              color: theme.colors['Strong'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 40,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Select Another Profile'}
        />
      </View>
      {/* Book Appointment */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('DetailAppointmentScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 12,
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            height: 52,
            marginBottom: 25,
            marginLeft: 20,
            marginRight: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Book Appointment'}
      />
    </ScreenContainer>
  );
};

export default withTheme(SelectPatientScreen);
