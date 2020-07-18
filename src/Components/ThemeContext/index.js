import React from 'react';

export const themeConfig = {
  lightTheme: {
    fontColor: 'black',
    bodybg: 'white',
  },
  darkTheme: {
    fontColor: 'white',
    bodybg: 'black',
  },
};
const ThemeContext = React.createContext(themeConfig.lightTheme);

export default ThemeContext;
