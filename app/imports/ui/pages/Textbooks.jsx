import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ListingItem from '../components/ListingItem';
import { Listings } from '../../api/listing/Listing';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Textbooks extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className="manoa-bazaar-landing-background">
        <Container id="textbooks-page">
          <Header as="h2" textAlign="center">Textbooks</Header>
          <Card.Group>
            {this.props.books.map((item, index) => <ListingItem key={index}
                                                             item={item}
            />)}
          </Card.Group>
        </Container>
        </div>
    );
  }
}

/** Require an array of Listing documents in the props. */
Textbooks.propTypes = {
  books: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Listing documents.
  const subscription = Meteor.subscribe(Listings.itemPublicationName);
  return {
    books: Listings.collection.find({ category: 'Textbooks' }).fetch(),
    ready: subscription.ready(),
  };
})(Textbooks);
