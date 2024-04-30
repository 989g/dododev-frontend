# React Azure Integration

## Setting Up a React TypeScript

To begin, create a new React TypeScript project using the following command:

```bash
npx create-react-app my-app --template typescript
```

## Installing Azure Authentication

[Microsoft Authentication Library for React (msal-react)](https://www.npmjs.com/package/@azure/msal-react)

To integrate Azure authentication into your React application, you'll need to install the Microsoft Authentication Library for React (msal-react):

```bash
npm install @azure/msal-browser @azure/msal-react
```

## Additional Resources

[microsoft-authentication-library-for-js/lib/msal-react/docs/getting-started.md](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md#initialization)

`@azure/msal-react` is built on the [React context API](https://reactjs.org/docs/context.html) and all parts of your app that require authentication must be wrapped in the `MsalProvider` component. You will first need to [initialize](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md) an instance of `PublicClientApplication` then pass this to `MsalProvider` as a prop.
