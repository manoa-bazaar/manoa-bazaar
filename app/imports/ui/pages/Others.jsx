import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Listings } from '../../api/listing/Listing';
import ListingItem from '../components/ListingItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Others extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="manoa-bazaar-landing-background">
        <Container id="others-page">
          <Header as="h2" textAlign="center">Other items</Header>
          <Card.Group>
            {this.props.others.map((item, index) => <ListingItem key={index}
                                                                item={item}
            />)}
          </Card.Group>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Others.propTypes = {
  others: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Listings.itemPublicationName);
  return {
    others: Listings.collection.find({ category: 'Other Items' }).fetch(),
    ready: subscription.ready(),
  };
})(Others);
