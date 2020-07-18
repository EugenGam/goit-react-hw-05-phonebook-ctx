import React from 'react';
import withTheme from './HOC/withTheme';

const ThemeButton = ({ onClick, theme }) => {
  return (
    <button
      style={{ color: theme.fontColor, background: theme.bodybg }}
      onClick={onClick}
    >
      Change theme!
    </button>
  );
};

export default withTheme(ThemeButton);
