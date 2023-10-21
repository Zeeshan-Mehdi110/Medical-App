import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AddNewProfileScreen from './screens/AddNewProfileScreen';
import CallHospitalScreen from './screens/CallHospitalScreen';
import ChatOverScreen from './screens/ChatOverScreen';
import ChatScreen from './screens/ChatScreen';
import ChooseDoctorScreen from './screens/ChooseDoctorScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import DetailAppointmentScreen from './screens/DetailAppointmentScreen';
import DoctorDetailsScreen from './screens/DoctorDetailsScreen';
import DoctorsListScreen from './screens/DoctorsListScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import HistoryTransactionScreen from './screens/HistoryTransactionScreen';
import HomeScreen from './screens/HomeScreen';
import HospitalonMapScreen from './screens/HospitalonMapScreen';
import ListMedicineScreen from './screens/ListMedicineScreen';
import ListnearesthospitalScreen from './screens/ListnearesthospitalScreen';
import LoginScreen from './screens/LoginScreen';
import MedicineDeliveredScreen from './screens/MedicineDeliveredScreen';
import MedicineDetailsScreen from './screens/MedicineDetailsScreen';
import MedicineSearchingScreen from './screens/MedicineSearchingScreen';
import MessagesScreen from './screens/MessagesScreen';
import MyCartScreen from './screens/MyCartScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import Onboarding1Screen from './screens/Onboarding1Screen';
import Onboarding2Screen from './screens/Onboarding2Screen';
import Onboarding3Screen from './screens/Onboarding3Screen';
import PaymentConfirmationScreen from './screens/PaymentConfirmationScreen';
import PaymentInstructionScreen from './screens/PaymentInstructionScreen';
import PaymentScreen from './screens/PaymentScreen';
import PersonalDataScreen from './screens/PersonalDataScreen';
import ProfileScreen from './screens/ProfileScreen';
import SelectPatientScreen from './screens/SelectPatientScreen';
import SelectProfileScreen from './screens/SelectProfileScreen';
import SuccessRegisterScreen from './screens/SuccessRegisterScreen';
import VerificationCodeScreen from './screens/VerificationCodeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopColor: 'transparent' },
        tabBarShowLabel: false,
        tabBarIconStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="HistoryTransactionScreen"
        component={HistoryTransactionScreen}
        options={{
          title: 'History Transaction',
        }}
      />
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          title: 'Messages',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'none',
        }}
      >
        <Stack.Screen
          name="Onboarding1Screen"
          component={Onboarding1Screen}
          options={{
            title: 'Onboarding 1',
          }}
        />
        <Stack.Screen
          name="Onboarding2Screen"
          component={Onboarding2Screen}
          options={{
            title: 'Onboarding 2',
          }}
        />
        <Stack.Screen
          name="Onboarding3Screen"
          component={Onboarding3Screen}
          options={{
            title: 'Onboarding 3',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="VerificationCodeScreen"
          component={VerificationCodeScreen}
          options={{
            title: 'Verification Code',
          }}
        />
        <Stack.Screen
          name="PersonalDataScreen"
          component={PersonalDataScreen}
          options={{
            title: 'Personal Data',
          }}
        />
        <Stack.Screen
          name="SuccessRegisterScreen"
          component={SuccessRegisterScreen}
          options={{
            title: 'Success Register',
          }}
        />
        <Stack.Screen
          name="DoctorsListScreen"
          component={DoctorsListScreen}
          options={{
            title: 'Doctors List',
          }}
        />
        <Stack.Screen
          name="DoctorDetailsScreen"
          component={DoctorDetailsScreen}
          options={{
            title: 'Doctor Details',
          }}
        />
        <Stack.Screen
          name="SelectPatientScreen"
          component={SelectPatientScreen}
          options={{
            title: 'Select Patient',
          }}
        />
        <Stack.Screen
          name="SelectProfileScreen"
          component={SelectProfileScreen}
          options={{
            title: 'Select Profile',
          }}
        />
        <Stack.Screen
          name="DetailAppointmentScreen"
          component={DetailAppointmentScreen}
          options={{
            title: 'Detail Appointment',
          }}
        />
        <Stack.Screen
          name="AddNewProfileScreen"
          component={AddNewProfileScreen}
          options={{
            title: 'Add New Profile',
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            title: 'Chat',
          }}
        />
        <Stack.Screen
          name="ChatOverScreen"
          component={ChatOverScreen}
          options={{
            title: 'Chat Over',
          }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            title: 'Edit Profile',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="CallHospitalScreen"
          component={CallHospitalScreen}
          options={{
            title: 'Call Hospital',
          }}
        />
        <Stack.Screen
          name="ListnearesthospitalScreen"
          component={ListnearesthospitalScreen}
          options={{
            title: 'List nearest hospital',
          }}
        />
        <Stack.Screen
          name="HospitalonMapScreen"
          component={HospitalonMapScreen}
          options={{
            title: 'Hospital on Map',
          }}
        />
        <Stack.Screen
          name="ChooseDoctorScreen"
          component={ChooseDoctorScreen}
          options={{
            title: 'Choose Doctor',
          }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            title: 'Payment',
          }}
        />
        <Stack.Screen
          name="PaymentInstructionScreen"
          component={PaymentInstructionScreen}
          options={{
            title: 'Payment Instruction',
          }}
        />
        <Stack.Screen
          name="ListMedicineScreen"
          component={ListMedicineScreen}
          options={{
            title: 'List Medicine',
          }}
        />
        <Stack.Screen
          name="MedicineDetailsScreen"
          component={MedicineDetailsScreen}
          options={{
            title: 'Medicine Details',
          }}
        />
        <Stack.Screen
          name="MedicineSearchingScreen"
          component={MedicineSearchingScreen}
          options={{
            title: 'Medicine Searching',
          }}
        />
        <Stack.Screen
          name="MedicineDeliveredScreen"
          component={MedicineDeliveredScreen}
          options={{
            title: 'Medicine Delivered',
          }}
        />
        <Stack.Screen
          name="PaymentConfirmationScreen"
          component={PaymentConfirmationScreen}
          options={{
            title: 'Payment Confirmation',
          }}
        />
        <Stack.Screen
          name="DeliveryScreen"
          component={DeliveryScreen}
          options={{
            title: 'Delivery',
          }}
        />
        <Stack.Screen
          name="MyCartScreen"
          component={MyCartScreen}
          options={{
            title: 'My Cart',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
