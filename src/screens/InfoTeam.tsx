import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../..";
import { useTheme } from "../context/ThemeContext";
import { fetchTeamInfo } from "../api/teamsApi";
import { Team } from "../interface/teams";
import { Venue } from "../interface/teams";

type InfoTeamScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "InfoTeam"
>;
type InfoTeamScreenRouteProp = RouteProp<RootStackParamList, "InfoTeam">;

type Props = {
  navigation: InfoTeamScreenNavigationProp;
  route: InfoTeamScreenRouteProp;
};

const InfoTeamScreen: React.FC<Props> = ({ navigation, route }) => {
  const { isDarkMode } = useTheme();
  const [teamInfo, setTeamInfo] = useState<Team | null>(null);
  const [venueInfo, setVenueInfo] = useState<Venue | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { teamID } = route.params;

  useEffect(() => {
    const getTeamInfo = async () => {
      const data = await fetchTeamInfo(Number(teamID));
      if (data) {
        setTeamInfo(data?.response[0].team);
        setVenueInfo(data.response[0].venue);
        setLoading(false);
      }
    };
    getTeamInfo();
  }, [teamID]);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        Info Team Screen
      </Text>
      {loading ? (
        <Text style={[styles.text, isDarkMode && styles.darkText]}>
          Loading...
        </Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Team Information:
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Name: {teamInfo?.name}
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Country: {teamInfo?.country}
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Founded: {teamInfo?.founded}
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Venue: {venueInfo?.name}
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Address: {venueInfo?.address}
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Capacity: {venueInfo?.capacity}
          </Text>
          <Text style={[styles.text, isDarkMode && styles.darkText]}>
            Surface: {venueInfo?.surface}
          </Text>
        </ScrollView>
      )}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { teamID })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "black",
  },
  text: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default InfoTeamScreen;
