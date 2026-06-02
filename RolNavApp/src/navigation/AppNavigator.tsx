import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Tipos para los navegadores
type RootStackParamList = {
  Login: undefined;
  AdminTabs: undefined;
  CommonTabs: undefined;
};

type AdminTabParamList = {
  Home: undefined;
  Settings: undefined;
};

type CommonTabParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const AdminTab = createBottomTabNavigator<AdminTabParamList>();
const CommonTab = createBottomTabNavigator<CommonTabParamList>();

// Tabs para rol ADMIN: ve Home y Settings, inicia en Settings
function AdminTabs(): React.JSX.Element {
  return (
    <AdminTab.Navigator initialRouteName="Settings">
      <AdminTab.Screen name="Home" component={HomeScreen} />
      <AdminTab.Screen name="Settings" component={SettingsScreen} />
    </AdminTab.Navigator>
  );
}

// Tabs para rol COMMON: solo ve Home, Settings no existe
function CommonTabs(): React.JSX.Element {
  return (
    <CommonTab.Navigator initialRouteName="Home">
      <CommonTab.Screen name="Home" component={HomeScreen} />
    </CommonTab.Navigator>
  );
}

export default function AppNavigator(): React.JSX.Element {
  const { sesionActiva, rol } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!sesionActiva ? (
          // Sin sesión → Login
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : rol === 'admin' ? (
          // Admin → Tabs con Home y Settings, abre en Settings
          <Stack.Screen name="AdminTabs" component={AdminTabs} />
        ) : (
          // Common → Tabs solo con Home
          <Stack.Screen name="CommonTabs" component={CommonTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}