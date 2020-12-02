import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Grid } from 'semantic-ui-react';
import _ from 'underscore';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ListingItem from '../components/ListingItem';
import { Listings } from '../../api/listing/Listing';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className="manoa-bazaar-landing-background" id="landing-page">
          <Container>
            <Grid verticalAlign='top' textAlign='left' container>
              <Grid.Column width={8}>
                <Header as='h1'>Welcome to Manoa Bazaar</Header>
              </Grid.Column>
            </Grid>
            <Grid verticalAlign='bottom' textAlign='centered' container>
              <Grid.Column width={16}>
                <Header as='h2'>Buy and sell items from other UHM students</Header>
              </Grid.Column>
            </Grid>
          </Container>
          <Container>
            <Grid columns={4}>
              <Grid.Row>
                <Card.Group>
                  {this.props.landing.map((item, index) => <ListingItem key={index}
                                                                        item={item}/>)}
                </Card.Group>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

/** Require an array of Listing documents in the props. */
Landing.propTypes = {
  landing: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Listing documents.
  const subscription = Meteor.subscribe(Listings.itemPublicationName);
  return {
    landing: _.sample(Listings.collection.find({}).fetch(), 4),
    ready: subscription.ready(),
  };
})(Landing);
