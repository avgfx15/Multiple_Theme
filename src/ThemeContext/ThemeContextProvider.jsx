import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import Themes from './ThemeVariable';

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(Themes[0]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(...Themes);
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
