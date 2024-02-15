import React, { useEffect, useState } from 'react';
import storageManagerService from "../services/storage/storage-manager-service";
import { STORAGE_THEME } from '../services/storage/storage-constants';

const sessionStorageService = storageManagerService(true);

const THEMES = ['light', 'dark'];
const ThemeContext = React.createContext(() => {});

export function ThemeProvider(props) {
  let currentTheme = sessionStorageService.getItem(STORAGE_THEME);
  const [themeState, setThemeState] = useState(currentTheme);
  if (THEMES.indexOf(themeState) < 0) {
    currentTheme = 'dark';
    setThemeState(currentTheme);
  } 
  sessionStorageService.setItem(STORAGE_THEME, currentTheme);

  const isDarkMode = () => {
    return themeState === 'dark';
  }

  const toggleTheme = () => {
    setThemeState(isDarkMode() ? 'light' : 'dark');
  }


  useEffect(() => {
    sessionStorageService.setItem(STORAGE_THEME, themeState);
  }, [themeState]);

  return <ThemeContext.Provider value={{ theme: themeState, toggleTheme, isDarkMode }} {...props} />;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme should be inside the provider ThemeContext');
  }

  return context;
}
