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
    name: 'Notebooks',
    quantity: '3',
    price: '10$',
    image: 'https://m.media-amazon.com/images/I/61cBJHmE70L._AC_SS350_.jpg',
    category: 'School Supplies',
    condition: 'Excellent',
    description: 'Unused notebooks. I bought too many and do not need these.',
  },
    {
      name: 'Markers',
      quantity: '1',
      price: '10$',
      image: 'https://i5.walmartimages.com/asr/c7cad380-d106-4521-80e1-801f8c2ec666.69139fadc8ebcbc050b326917e375a4a.jpeg',
      category: 'School Supplies',
      condition: 'Good',
      description: 'Makers that will help make your summaries look more organized! All unused.',
    },
    {
      name: 'iClicker 2',
      quantity: '1',
      price: '35$',
      image: 'https://i.pinimg.com/originals/74/53/b9/7453b93004e37a5c666910a440f129ca.jpg',
      category: 'School Supplies',
      condition: 'Good',
      description: 'iClicker 2 that I only used for 1 semester.',
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
