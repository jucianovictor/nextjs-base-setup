import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

import Home from './home';

const App: React.FC<AppProps> = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
