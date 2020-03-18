import React, { createContext } from 'react';

export const ThemeContext = createContext('theme');
export const LocaleContext = createContext(
  <span>
    <i className="fas fa-flag"></i>
  </span>
);
