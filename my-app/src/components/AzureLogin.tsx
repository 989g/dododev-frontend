import React from 'react';
import { useMsal } from '@azure/msal-react';

export function AzureLogin() {
  const { instance, accounts, inProgress } = useMsal();

  const handleLogin = () => {
    instance.loginPopup()
  }
  
  const handleLogout = () => {
    instance.logout();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Azure Authentication</h2>
          {accounts.length > 0 ? (
            <>
              <p className="text-green-600 mb-6 text-center">There are currently {accounts.length} users signed in!</p>
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : inProgress === 'login' ? (
            <p className="text-blue-600 mb-6 text-center">Login is currently in progress!</p>
          ) : (
            <>
              <p className="mb-6 text-center">There are currently no users signed in!</p>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
