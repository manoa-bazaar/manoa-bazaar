import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Landing from '../pages/Landing';
import Categories from '../pages/Categories';
import ListListingAdmin from '../pages/ListListingAdmin';
import Textbooks from '../pages/Textbooks';
import AddListing from '../pages/AddListing';
import EditListing from '../pages/EditListing';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import ViewItem from '../pages/ViewItem';
import KitchenItems from '../pages/KitchenItems';
import BedroomItems from '../pages/BedroomItems';
import SchoolItems from '../pages/SchoolItems';
import UserProfile from '../pages/UserProfile';
import Others from '../pages/Others';
import Footer from '../components/Footer';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <ProtectedRoute path="/categories" component={Categories}/>
              <ProtectedRoute path="/textbooks" component={Textbooks}/>
              <ProtectedRoute path="/kitchenware" component={KitchenItems}/>
              <ProtectedRoute path="/bedroom" component={BedroomItems}/>
              <ProtectedRoute path="/school" component={SchoolItems}/>
              <ProtectedRoute path="/other" component={Others}/>
              <ProtectedRoute path="/user-profile" component={UserProfile}/>
              <ProtectedRoute path="/add" component={AddListing}/>
              <ProtectedRoute path="/edit/:_id" component={EditListing}/>
              <ProtectedRoute path="/viewitem/:_id" component={ViewItem}/>
              <AdminProtectedRoute path="/admin" component={ListListingAdmin}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
