import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useTheme } from '../context/ThemeContext';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';

type CreateAccountScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;

type Props = {
  navigation: CreateAccountScreenNavigationProp;
};

const CreateAccountScreen: React.FC<Props> = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Account created successfully!');
      navigation.navigate('SelectTeam');
    } catch (error) {
      Alert.alert('Error creating account', (error as any).message);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Create Account</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? 'white' : 'black'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? 'white' : 'black'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? 'white' : 'black'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Confirm Password"
        placeholderTextColor={isDarkMode ? 'white' : 'black'}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={pickImage}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Select Profile Photo</Text>
      </TouchableOpacity>
      {profileImage && <Image source={{ uri: profileImage }} style={styles.profileImage} />}
      <Button title="Create Account" onPress={handleCreateAccount} />
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
  darkInput: {
    color: 'white',
    borderColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
});

export default CreateAccountScreen;