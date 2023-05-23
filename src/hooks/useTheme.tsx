import * as React from 'react';
import {Theme} from '../../@types/natigation';
import DefaultTheme from '../theme/variables';

type Props = {
  value: Theme;
  children: React.ReactNode;
};

const ThemeContext = React.createContext<Theme>(DefaultTheme);
ThemeContext.displayName = 'ThemeContext';

export function ColorProvider({value, children}: Props) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default function useTheme() {
  const theme = React.useContext(ThemeContext);

  return theme;
}
