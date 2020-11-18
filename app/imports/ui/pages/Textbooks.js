import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
// import { Stuffs } from '../../api/stuff/Stuff';
import Textbook from '../components/Textbook';
import { Listings } from '../../api/listing/Listing';

// import { Stuffs } from '../../api/stuff/Stuff';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Textbooks extends React.Component {

  textbooks = [{
    name: 'Neurobiology textbook',
    quantity: '2',
    price: '75$',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41zvoQos4yL._SX348_BO1,204,203,200_.jpg',
    category: 'Textbooks',
    condition: 'Fair',
    description: 'This is the CLRS textbook that is used in ICS 311. It is in used, but a fair condition,' +
        ' only used it for one semester.',
  },
    {
      name: 'Discrete math textbook',
      quantity: '1',
      price: '90$',
      image: 'https://images-na.ssl-images-amazon.com/images/I/5102AwbnX7L._SX374_BO1,204,203,200_.jpg',
      category: 'Textbooks',
      condition: 'Excellent',
      description: 'Discrete math textbook. Rarely opened during the semester, thus no usage-signs.',
    },
    {
      name: 'English literature',
      quantity: '1',
      price: '30$',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51qH5xQeikL.jpg',
      category: 'Textbooks',
      condition: 'Poor',
      description: 'English literature book that I have used it for over 10 years.',
    },
    {
      name: 'ICS311 Textbook',
      quantity: '1',
      price: '75$',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX440_BO1,204,203,200_.jpg',
      category: 'Textbooks',
      condition: 'Good',
      description: 'This is the CLRS textbook that is used in ICS 311. It is in good condition,' +
          'only used it for one semester.',
    },
    {
      name: 'Beginners French',
      quantity: '1',
      price: '75$',
      image: 'https://images-na.ssl-images-amazon.com/images/I/A1TLo46bAqL.jpg',
      category: 'Textbooks',
      condition: 'Excellent',
      description: 'French textbook for beginners. Helped me out a lot!',
    },
    {
      name: 'Physics textbook',
      quantity: '1',
      price: '125$',
      image: 'https://cuhsphysics.weebly.com/uploads/3/8/9/5/38955313/1484413_orig.png',
      category: 'Textbooks',
      condition: 'Good',
      description: 'Physics textbook that I have used for 2 semesters, but it is in good condition.',
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
