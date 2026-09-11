// src/hooks/useTheme.js
// Manages light/dark theme with localStorage persistence and system preference detection.

import { useState, useEffect } from 'react';

export function useTheme() {
  const getInitialTheme = () => {
    // 1. Check localStorage for a saved preference
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved;

    // 2. Fall back to the user's OS preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';

    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply the theme attribute to the root element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
