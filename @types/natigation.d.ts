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

export type Theme = {
  Colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    opacity: number
  },
  Layout: {
    fill: number;
  },
  Gutters: {
    mainPadding: number;
  },
  Fonts: {
    bold: any;
  }
};
