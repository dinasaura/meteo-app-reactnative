import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

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

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
