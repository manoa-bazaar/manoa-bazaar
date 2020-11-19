import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Textbook from '../components/Textbook';
import { Listings } from '../../api/listing/Listing';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Textbooks extends React.Component {

  textbooks = [{
    name: 'Couch',
    quantity: '1',
    price: '60$',
    image: 'https://1q53492h6qsl1p6jty407gjh-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/used-furniture-reclining-sofa.jpg',
    category: 'Other Items',
    condition: 'Fair',
    description: 'Used couch. Has usage marks, but still works great.',
  },
    {
      name: 'Table',
      quantity: '1',
      price: '50$',
      image: 'https://www.welterstorage.com/wp-content/uploads/2018/05/IMG_1921.jpg',
      category: 'Other Items',
      condition: 'Good',
      description: 'Multi-use table. 40x40 inches.',
    },
  ];

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Contacts</Header>
          <Card.Group>{this.textbooks.map((textBook, index) => <Textbook key={index} textBook={textBook} />)}</Card.Group>
        </Container>
    );
  }
}
/** Require an array of Stuff documents in the props. */
Textbooks.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Listings.userPublicationName);
  return {
    stuffs: Listings.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Textbooks);
