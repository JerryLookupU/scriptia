import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'midnight' | 'draft' | 'silver' | 'solar' | 'forest' | 'dracula' | 'sunset' | 'ocean' | 'monochrome' | 'sepia';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('card-system-theme') as Theme;
    const validThemes: Theme[] = ['midnight', 'draft', 'silver', 'solar', 'forest', 'dracula', 'sunset', 'ocean', 'monochrome', 'sepia'];
    return validThemes.includes(saved) ? saved : 'draft';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('card-system-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
