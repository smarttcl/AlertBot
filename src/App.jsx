import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bot from "./pages/Bot";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login";
import { LogoutButton } from "./components/Logout";


const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
    {isAuthenticated ? (
            <>
              {/* <Profile /> */}
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/AlertBot">
          <Bot />
        </Route>
      </Switch>
    </Router>
    </div>
  );
};

export default App;
