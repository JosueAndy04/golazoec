import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useTheme } from '../context/ThemeContext';

type SelectTeamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectTeam'>;

type Props = {
  navigation: SelectTeamScreenNavigationProp;
};

const SelectTeamScreen: React.FC<Props> = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Select Team Screen</Text>
      <Button title="Go to Info Team" onPress={() => navigation.navigate('InfoTeam')} />
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
});

export default SelectTeamScreen;