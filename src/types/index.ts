import {NavigatorScreenParams} from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  tabs: NavigatorScreenParams<MainTabsParamList>;
  search: undefined;
  city: {
    name: string;
  };
};

export type MainTabsParamList = {
  home: undefined;
  favorites: undefined;
};