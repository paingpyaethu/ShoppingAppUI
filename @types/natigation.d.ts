import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type MainParamList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
