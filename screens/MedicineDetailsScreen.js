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
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const MedicineDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [showcart, setShowcart] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
          },
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

        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
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
            {'Medication Details'}
          </Text>
        </View>
        {/* Cart */}
        <>
          {!showcart ? null : (
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('MyCartScreen');
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
                <Icon name={'Ionicons/ios-cart-outline'} size={24} />
              </View>
            </Touchable>
          )}
        </>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Medication Details */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Content */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
              },
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
                source={Images.Medicines}
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
                  {'Woods Papermint'}
                </Text>
                {/* Price */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Primary'],
                      fontFamily: 'Inter_500Medium',
                      marginTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  {'Rp20.000'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Description */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Heading */}
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
              {'Description'}
            </Text>
          </View>
          {/* Content */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  lineHeight: 18,
                  opacity: 0.75,
                },
                dimensions.width
              )}
            >
              {
                'Woods Papaermint is a medicine that contains Paracetamol, Phenylephrine, and Dextromethorphan HBr. This drug is used to treat flu symptoms such as fev.. '
              }
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Primary'],
                    fontFamily: 'Inter_500Medium',
                    lineHeight: 18,
                  },
                  dimensions.width
                )}
              >
                {'Read More'}
              </Text>
            </Text>
          </View>
        </View>
        {/* Dosage */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Heading */}
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
              {'Dosage'}
            </Text>
          </View>
          {/* Content */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  lineHeight: 18,
                  opacity: 0.75,
                },
                dimensions.width
              )}
            >
              {'Adults: 3 times a day 15 mL\nChildren: 3 times a day 7.5 mL'}
            </Text>
          </View>
        </View>
        {/* Side effects */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Section Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Heading */}
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
              {'Side effects'}
            </Text>
          </View>
          {/* Content */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 12,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            {/* About */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  lineHeight: 18,
                  opacity: 0.75,
                },
                dimensions.width
              )}
            >
              {
                'Psychomotor disturbances, tachycardia, arrhythmias, palpitations, urinary retention; sleepy. Liver damage (due to large doses and long-term use)'
              }
            </Text>
          </View>
        </View>
        {/* Add to Cart */}
        <Button
          onPress={() => {
            try {
              setShowcart(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 12,
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              height: 52,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Add to Cart '}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MedicineDetailsScreen);
