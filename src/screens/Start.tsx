import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useTheme } from '../context/ThemeContext';

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Start'>;

type Props = {
  navigation: StartScreenNavigationProp;
};

const StartScreen: React.FC<Props> = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Button title="START" onPress={() => navigation.navigate('Login')} />
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
});

export default StartScreen;