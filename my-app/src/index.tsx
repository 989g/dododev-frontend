import React from 'react';
import ReactDOM from 'react-dom';

import { azureConfig } from './azure.config';
import { MsalProvider } from '@azure/msal-react';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';

import { AzureLogin } from './components/AzureLogin';
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
    <AzureLogin />
  </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));
