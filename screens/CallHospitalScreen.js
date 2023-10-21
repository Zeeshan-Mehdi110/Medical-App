import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const CallHospitalScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [Feedback_Modal, setFeedback_Modal] = React.useState(false);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { borderRadius: 12, justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            flexDirection: 'row',
            height: 72,
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom #ffffff'],
              borderRadius: 12,
              flexDirection: 'row',
              height: 48,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Back */}
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle size={50}>
              <Icon
                color={theme.colors['Strong']}
                name={'Ionicons/arrow-back-sharp'}
                size={24}
              />
            </Circle>
          </Touchable>
        </View>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flex: 1, marginTop: 50 },
          dimensions.width
        )}
      >
        {/* User Details */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'column', marginLeft: 8 },
            dimensions.width
          )}
        >
          {/* User Image */}
          <Circle bgColor={theme.colors.light} size={148}>
            <Image
              resizeMode={'cover'}
              source={{
                uri: `${
                  props.route?.params?.OtherUserImage ??
                  'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg'
                }`,
              }}
              style={StyleSheet.applyWidth(
                { height: 148, width: 148 },
                dimensions.width
              )}
            />
          </Circle>
          {/* Details */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Strong'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                  marginBottom: 5,
                  marginTop: 20,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {props.route?.params?.otherUser ?? 'Dr. Ken Dragon'}
            </Text>
            {/* Calling... */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['App Green'],
                  fontFamily: 'Inter_400Regular',
                  marginTop: 2,
                },
                dimensions.width
              )}
            >
              {'Caling...'}
            </Text>
          </View>
        </View>
        {/* Bottom Btns */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              bottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              left: 0,
              marginTop: 10,
              paddingBottom: 30,
              paddingLeft: 40,
              paddingRight: 40,
              paddingTop: 20,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* Mute */}
          <Button
            icon={'Ionicons/mic-outline'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors['Medium'],
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginTop: 20,
                paddingLeft: 15,
                textAlign: 'center',
                width: 51,
              },
              dimensions.width
            )}
            title={''}
          />
          {/* End call */}
          <Button
            icon={'Ionicons/call-outline'}
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_4'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Light'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginTop: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={''}
          />
          {/* Chat */}
          <Button
            icon={'Ionicons/ios-chatbox-outline'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors['Medium'],
                fontFamily: 'Inter_500Medium',
                fontSize: 15,
                height: 52,
                marginTop: 20,
                paddingLeft: 15,
                textAlign: 'center',
                width: 51,
              },
              dimensions.width
            )}
            title={''}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CallHospitalScreen);
