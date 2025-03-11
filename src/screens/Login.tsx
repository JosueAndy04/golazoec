import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useTheme } from '../context/ThemeContext';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Logged in successfully!');
      navigation.navigate('SelectTeam');
    } catch (error) {
      Alert.alert('Error logging in', (error as any).message);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? 'white' : 'black'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? 'white' : 'black'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Create Account" onPress={() => navigation.navigate('CreateAccount')} />
      <Button title="Log In" onPress={handleLogin} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default LoginScreen;