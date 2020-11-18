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
    name: 'Pots and pans',
    quantity: '7',
    price: '40$',
    image: 'https://s7d9.scene7.com/is/image/BedBathandBeyond/cookwareheroimage?$other$',
    category: 'Kitchenware',
    condition: 'Fair',
    description: 'Pots and pans that have been used during my first semester here.',
  },
    {
      name: 'Microwave',
      quantity: '1',
      price: '35$',
      image: 'https://www.squaredealonline.co.uk/wp-content/uploads/2019/05/Bosch_HMT75M451B-900x900.jpg',
      category: 'Kitchenware',
      condition: 'Fair',
      description: 'Mircowave perfect for in the dorms on campus! Used it for 2 years.',
    },
    {
      name: 'Mini fridge',
      quantity: '1',
      price: '80$',
      image: 'https://images.homedepot-static.com/productImages/7ccf5eb9-f68e-4b95-bb59-07b0649bffbf/svn/gray-costway-mini-fridges-ep22672gr-64_1000.jpg',
      category: 'Kitchenware',
      condition: 'Good',
      description: 'Mini fridge that is barely used. Works great!',
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
