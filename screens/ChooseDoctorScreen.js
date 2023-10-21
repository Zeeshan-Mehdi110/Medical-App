import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const ChooseDoctorScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
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
          {'Doctor'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          {
            marginTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Heading */}
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
          {'Choose your doctor'}
        </Text>
        {/* Search Bar */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Divider'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 48,
              marginTop: 15,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Icon
            name={'EvilIcons/search'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
          <TextInput
            autoCapitalize={'none'}
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Search doctor '}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
                width: '80%',
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Doctors List */}
        <DraftbitExampleApi.FetchDoctorsListGET count={6}>
          {({ loading, error, data, refetchDoctorsList }) => {
            const doctorsListData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlashList
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                data={doctorsListData}
                estimatedItemSize={50}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'X0oXnWKh'}
                numColumns={1}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('DoctorDetailsScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        { marginTop: 20 },
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
                            height: 104,
                            paddingLeft: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Image
                          resizeMode={'cover'}
                          source={{ uri: `${flashListData?.avatar}` }}
                          style={StyleSheet.applyWidth(
                            { borderRadius: 4, height: 80, width: 80 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { marginLeft: 15 },
                            dimensions.width
                          )}
                        >
                          {/* Name */}
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
                            {flashListData?.full_name}
                          </Text>
                          {/* Speciality */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_300Light',
                                fontSize: 13,
                                marginTop: 5,
                                opacity: 0.7,
                              },
                              dimensions.width
                            )}
                          >
                            {'Cardiologi Specialist'}
                          </Text>
                          {/* Fees */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Primary'],
                                  fontFamily: 'Inter_500Medium',
                                },
                                dimensions.width
                              )}
                            >
                              {'Rp.'}
                              {flashListData?.id}
                              {'00.000'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Touchable>
                  );
                }}
              />
            );
          }}
        </DraftbitExampleApi.FetchDoctorsListGET>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ChooseDoctorScreen);
