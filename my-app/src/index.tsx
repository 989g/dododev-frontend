import React from 'react';
import ReactDOM from 'react-dom';

import { MsalProvider } from '@azure/msal-react';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';

import { App } from './App';

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: 'abc',
  },
};

const pca = new PublicClientApplication(configuration);

// Component
const AppProvider = () => (
  <MsalProvider instance={pca}>
    <App />
  </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));
