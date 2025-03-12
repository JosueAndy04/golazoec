import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useTheme } from '../context/ThemeContext';
import { fetchTeams } from '../api/teamsApi';
import { Team } from '../interface/teams';

type SelectTeamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectTeam'>;

type Props = {
  navigation: SelectTeamScreenNavigationProp;
};

const SelectTeamScreen: React.FC<Props> = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTeamsData = async () => {
      const teamsData = await fetchTeams();
      if (teamsData) {
        setTeams(teamsData.response.map(response => response.team));
      }
      setLoading(false);
      console.log(teamsData);
    };
    
    getTeamsData();
  }, []);

  const handleTeamSelect = (teamID: number) => {
    // Navigate to InfoTeam screen with the selected teamID
    navigation.navigate('InfoTeam', { teamID: teamID.toString() });
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>Select Team Screen</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTeamSelect(item.id)}>
            <View style={styles.teamItem}>
              <Image source={{ uri: item.logo }} style={styles.teamLogo} />
              <Text style={[styles.teamName, isDarkMode && styles.darkText]}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  darkText: {
    color: 'white',
  },
  teamItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  teamLogo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain',
  },
  teamName: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SelectTeamScreen;