import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {Loader, Container, Card, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import { Users } from '../../api/users/User';
import { Listings } from '../../api/listing/Listing';
import ListingItemUser from '../components/ListingItemUser';

/** A simple static component to render some text for the landing page. */
class UserProfile extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div id="userprofile-page">
          {this.props.users.map((user, index) => <UserInfo
              key={index}
              users={user}/>)}
          <Card.Group>
            {this.props.list.map((item, index) => <ListingItemUser
                key={index}
                item={item}
                listing={this.props.list.filter(listing => (listing.contactId === item._id))}/>)}
          </Card.Group>
        </div>
    );
  }
}

UserProfile.propTypes = {
  list: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Users documents.
  const subscription = Meteor.subscribe(Users.userPublicationName);
  const subscription2 = Meteor.subscribe(Listings.itemPublicationName);
  return {
    users: Users.collection.find({}).fetch(),
    list: Listings.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(UserProfile);
