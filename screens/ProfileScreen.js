import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const ProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { height: 48, marginLeft: 20, marginTop: 12 },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 24,
            },
            dimensions.width
          )}
        >
          {'Profile'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, marginBottom: 20, paddingBottom: 25 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* User Details */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'center', minHeight: 200 },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Ellipse21}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 60,
                  height: 110,
                  position: 'absolute',
                  top: 5,
                  width: 110,
                },
                dimensions.width
              )}
            />
            <Touchable
              activeOpacity={0.8}
              disabledOpacity={0.8}
              onPress={() => {
                try {
                  navigation.navigate('EditProfileScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Image
                resizeMode={'cover'}
                source={Images.EditPicFrame}
                style={StyleSheet.applyWidth(
                  { height: 137, width: 120 },
                  dimensions.width
                )}
              />
            </Touchable>
          </View>
          {/* Name */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 12,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Thomas Slebew'}
          </Text>
          {/* ID */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginTop: 4,
                opacity: 0.6,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'081732123912'}
          </Text>
        </View>
        {/* Menu */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom #ffffff'],
              borderRadius: 12,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Location */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Strong']}
                name={'Ionicons/location-outline'}
                size={24}
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Location'}
              </Text>
            </View>
          </Touchable>
          {/* Payment */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Strong']}
                name={'Ionicons/md-wallet-outline'}
                size={24}
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Payment'}
              </Text>
            </View>
          </Touchable>
          {/* Privacy */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Strong']}
                name={'MaterialCommunityIcons/security'}
                size={24}
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Privacy Policy'}
              </Text>
            </View>
          </Touchable>
          {/* Terms and Conditions */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Strong']}
                name={'Entypo/text-document'}
                size={24}
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Term And Conditions'}
              </Text>
            </View>
          </Touchable>
          {/* Contact Us */}
          <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Strong']}
                name={'AntDesign/contacts'}
                size={24}
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Contact Us'}
              </Text>
            </View>
          </Touchable>
          {/* Logout */}
          <Touchable
            activeOpacity={0.8}
            disabledOpacity={0.8}
            onPress={() => {
              try {
                navigation.navigate('WelcomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', height: 60 },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Strong']}
                name={'AntDesign/logout'}
                size={24}
                style={StyleSheet.applyWidth(
                  { opacity: 0.6 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Inter_500Medium',
                    fontSize: 15,
                    marginLeft: 10,
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {'Logout'}
              </Text>
            </View>
          </Touchable>
        </View>
      </ScrollView>
      {/* Bottom Tab */}
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
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HistoryTransactionScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
        <Touchable
          activeOpacity={0.8}
          disabledOpacity={0.8}
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'MessagesScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
              name={'FontAwesome/user'}
              size={24}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
