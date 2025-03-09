import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MatchesScreen from "./Matches";
import NewsScreen from "./News";
import TeamScreen from "./Team";
import LigaScreen from "./Liga";
import { useTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type HomeScreenNavigationProp = BottomTabNavigationProp<any>;

const HomeScreen: React.FC<{ navigation: HomeScreenNavigationProp }> = ({
  navigation,
}) => {
    const { isDarkMode } = useTheme();
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? 'black' : 'white',
        },
        tabBarActiveTintColor: isDarkMode ? 'white' : 'black',
        tabBarInactiveTintColor: isDarkMode ? 'gray' : 'darkgray',
      }}
    >
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
            headerRight: () => (
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.profileButtonText}>P</Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: isDarkMode ? 'black' : 'white',
              },
              headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
            headerRight: () => (
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.profileButtonText}>P</Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: isDarkMode ? 'black' : 'white',
              },
              headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Tab.Screen
        name="Teams"
        component={TeamScreen}
        options={{
            headerRight: () => (
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.profileButtonText}>P</Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: isDarkMode ? 'black' : 'white',
              },
              headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <Tab.Screen
        name="Liga"
        component={LigaScreen}
        options={{
            headerRight: () => (
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.profileButtonText}>P</Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: isDarkMode ? 'black' : 'white',
              },
              headerTintColor: isDarkMode ? 'white' : 'black',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  profileButton: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  profileButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
