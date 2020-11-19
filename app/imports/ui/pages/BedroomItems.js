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
    name: 'Full size mattress',
    quantity: '1',
    price: '70$',
    image: 'https://static.rcwilley.com/products/111062993/Sunset-Ruby-Firm-Full-Size-Mattress-rcwilley-image1~800.jpg',
    category: 'Bedroom Items',
    condition: 'Good',
    description: 'Full size mattress that has been in storage for most of the time. I slept on it for about 4 weeks' +
    ' and then I moved to a furnished bedroom, and did not need it anymore.',
  },
    {
      name: 'Standing fan',
      quantity: '1',
      price: '20$',
      image: 'https://secure.img1-fg.wfcdn.com/im/54764023/resize-h310-w310%5Ecompr-r85/9153/91537614/18-oscillating-pedestal-fan.jpg',
      category: 'Bedroom Items',
      condition: 'Excellent',
      description: 'Fan that gives you a much needed breeze on the hot nights!',
    },
    {
      name: 'Nightstand',
      quantity: '1',
      price: '30$',
      image: 'https://images.eq3.com/product-definitions/cjuu1i1z80dps0102x327b7eq/instance/cjv5mezg7060y01902bb3hzkb/THUMBNAIL/26a2c563-72f2-44f6-8da8-fda3b6361a1d.jpg',
      category: 'Bedroom Items',
      condition: 'Fair',
      description: 'Very basic nightstand. Has some usage marks, but works fine.',
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
