import React from 'react';
import { useMsal } from '@azure/msal-react';

export function AzureLogin() {
  const { instance, accounts, inProgress } = useMsal();

  if (accounts.length > 0) {
    return <span>There are currently {accounts.length} users signed in!</span>;
  } else if (inProgress === 'login') {
    return <span>Login is currently in progress!</span>;
  } else {
    return (
      <div>
        <span>There are currently no users signed in!</span>
        <button className='text-white font-semibold py-2 px-4 border rounded-md bg-blue-600' onClick={() => instance.loginPopup()}>Login</button>
      </div>
    );
  }
}
