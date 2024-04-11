import React from 'react';
import ReactDOM from 'react-dom';

import { azureConfig } from './utils/azure/azure.config';
import { MsalProvider } from '@azure/msal-react';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';

import { Login } from './components/Example';
import './index.css';

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: azureConfig.clientId!,
  },
};

const pca = new PublicClientApplication(configuration);

// Component
const AppProvider = () => (
  <MsalProvider instance={pca}>
    <Login />
  </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));
