import React from 'react';
import { Grid, Rating, Image, Divider, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../api/users/User';

/** A simple static component to render some text for the landing page. */
class UserInfo extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Grid verticalAlign='middle' container>
          <Grid.Row>
            <Image src={this.props.users.banner}/>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column floated='left'>
              <Image id="icon-space" size='small' circular src={this.props.users.image}/>
            </Grid.Column>
            <Grid.Column>
              <h2>{this.props.users.screenname}</h2>
              <Rating icon='star' defaultRating={4} maxRating={5} />
              <p>Located in: {this.props.users.location}</p>
              <h4>80 items listed | 78 sales</h4>
              {this.props.users.description}
            </Grid.Column>
          </Grid.Row>
          <Divider fitted/>
          <Grid.Row columns={4}>
          </Grid.Row>
        </Grid>
    );
  }
}

UserInfo.propTypes = {
  users: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Users documents.
  const subscription = Meteor.subscribe(Users.userPublicationName);
  return {
    ready: subscription.ready(),
  };
})(UserInfo);
