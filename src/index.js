import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-y455c6k6.us.auth0.com"
      clientId="coRMNUXsi1LdWn4F1Gfqws7wmQVDL96D"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
