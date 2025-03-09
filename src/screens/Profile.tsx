import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ProfileScreen: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [isSettings, setIsSettings] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {!isEditing && !isSettings && (
        <>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>Profile Screen</Text>
          <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
          <Button title="Settings" onPress={() => setIsSettings(true)} />
        </>
      )}
      {isEditing && (
        <View>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>Edit Profile Form</Text>
          {/* Add your form components here */}
          <Button title="Back to Profile" onPress={() => setIsEditing(false)} />
        </View>
      )}
      {isSettings && (
        <View>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>Settings</Text>
          <View style={styles.switchContainer}>
            <Text style={[styles.text, isDarkMode && styles.darkText]}>Dark Mode</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          </View>
          <Button title="Back to Profile" onPress={() => setIsSettings(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  text: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ProfileScreen;