# Error: AADSTS70002

## Description

The error message `AADSTS70002: The provided request must include a 'client_secret' input parameter.` typically occurs when working with Azure Active Directory (Azure AD) in a JavaScript Single Page Application (SPA).

## Solution

[Azure AD Example JavaScript SPA Error that it wants a 'client_secret'](https://learn.microsoft.com/en-us/answers/questions/1040901/azure-ad-example-javascript-spa-error-that-it-want)

Thanks for posting your query. For single-page apps (SPA) via the authorization code flow the app must be registered as SPA with port 3000 and not as web app. As per: https://learn.microsoft.com/en-us/azure/active-directory/develop/single-page-app-quickstart?pivots=devlang-javascript#step-1-register-your-application

![Azure AD SPA Configuration](https://learn-attachment.microsoft.com/api/attachments/248992-image.png?platform=QnA)
