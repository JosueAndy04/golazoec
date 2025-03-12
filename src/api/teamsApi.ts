import { Teams } from "../interface/teams";
import { apiFootballValue } from "./apiKey";

const API_URL = "https://v3.football.api-sports.io/teams";
const LEAGUE_ID = 242;
const SEASON = 2023;
const API_VALUE = apiFootballValue; // Replace with your actual API key

export const fetchTeams = async (): Promise<Teams | null> => {
  try {
    const response = await fetch(`${API_URL}?league=${LEAGUE_ID}&season=${SEASON}`, {
      method: "GET",
      headers: {
        "x-apisports-key": API_VALUE,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching teams: ${response.statusText}`);
    }

    const data: Teams = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
  export const fetchTeamInfo = async (teamId: number): Promise<Teams | null> => {
    try {
      const response = await fetch(`${API_URL}?id=${teamId}&league=${LEAGUE_ID}&season=${SEASON}`, {
        method: "GET",
        headers: {
          "x-apisports-key": API_VALUE,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching team info: ${response.statusText}`);
      }
  
      const data: Teams = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
};