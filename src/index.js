import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-eb7af1k300mug3i4.us.auth0.com"
    clientId="sTBUSHJSxZUCBLgTKUy4JkamzQLMQfe9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
  </Auth0Provider>
    <App />
  </React.StrictMode>
);
