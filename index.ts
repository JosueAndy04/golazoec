import { registerRootComponent } from 'expo';

import App from './App';

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
  CreateAccount: undefined;
  SelectTeam: undefined;
  InfoTeam: { teamID: string };
  Home: { teamID: string };
  Team: undefined;
  Matches: undefined;
  News: undefined;
  Liga: undefined;
  Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
  About: undefined;
  Contact: undefined;
  PrivacyPolicy: undefined;
  TermsOfService: undefined;
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
