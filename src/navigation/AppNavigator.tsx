import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import CreateAccountScreen from "../screens/CreateAccount";
import SelectTeamScreen from "../screens/SelectTeam";
import InfoTeamScreen from "../screens/InfoTeam";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import { useTheme } from '../context/ThemeContext';


const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isDarkMode } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen
        name="SelectTeam"
        component={SelectTeamScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InfoTeam" component={InfoTeamScreen} options={{
        headerStyle: {
          backgroundColor: isDarkMode ? 'black' : 'white',
        },
        headerTintColor: isDarkMode ? 'white' : 'black',
        headerTitleStyle: {
          color: isDarkMode ? 'white' : 'black',
        },
      }}/>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
