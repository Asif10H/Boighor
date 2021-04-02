import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/product/:_id">
            <ProductDetails />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
