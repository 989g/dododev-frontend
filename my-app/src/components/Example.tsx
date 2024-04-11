import React from 'react';
import { useMsal } from '@azure/msal-react';

export function Login() {
  const { instance, accounts, inProgress } = useMsal();

  const handleLogout = () => {
    instance.logout();
  };

  const handleLogin = () => {
    instance.loginPopup();
  };

  return (
    // Container
    <div className='flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-800 py-10 px-6'>
      
      {/* Login component */}
      <div className='flex flex-row-reverse shadow-lg'>
        {/* Login form */}
        <div className='w-full sm:w-6/12 flex flex-wrap content-center justify-center sm:rounded-r-2xl bg-white'>
          {/* <div className='w-72'> */}
          <div className='p-6 sm:p-0'>
            {/* Heading */}
            <h1 className='text-xl font-semibold'>Welcome back</h1>
            <small className='text-gray-400'>Welcome back! Please enter your details</small>
    
            {/* Form */}
            <form className='mt-4 w-[300px]'>
              <div className='mb-4'>
                <label className='mb-2 block text-xs font-semibold'>Email</label>
                <input type='email' placeholder='Enter your email' className='block text-[15px] w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1.5 px-3 text-gray-500' />
              </div>
    
              <div className='mb-4'>
                <label className='mb-2 block text-xs font-semibold'>Password</label>
                <input type='password' placeholder='*****' className='block text-[15px] w-full rounded-md border border-gray-300 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700 py-1.5 px-3 text-gray-500' />
              </div>
    
              <div className='mb-4 flex flex-wrap content-center'>
                <input id='remember' type='checkbox' className='mr-1 checked:bg-green-700' /> <label className='mr-auto text-xs font-semibold'>Remember for 30 days</label>
                <a href='#' className='text-xs font-semibold text-green-700'>Forgot password?</a>
              </div>
    
              <div className='mb-4'>
                <button className='mb-4 block w-full text-center text-white bg-green-700 hover:bg-green-900 px-2 py-1.5 rounded-full'>Sign in</button>
                <button className='flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-full'>
                  <img className='w-5 mr-2' src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'/>
                  Sign in with Google
                </button>
              </div>
            </form>
    
            {/* Footer */}
            <div className='text-center'>
              <span className='text-xs text-gray-400 font-semibold'>Don't have account?</span>
              <a href='#' className='text-xs font-semibold text-green-700'>Sign up</a>
            </div>
          </div>
        </div>
    
        {/* Login banner */}
        <div className='hidden sm:flex flex-wrap content-center justify-center'>
          <img className='w-full h-full bg-center bg-no-repeat bg-cover rounded-l-2xl' src='/images/FormLogin.png'/>
        </div>
        
      </div>

    </div>
  );
}
