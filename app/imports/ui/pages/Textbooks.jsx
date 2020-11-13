import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import SellItem from '../components/SellItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Textbooks extends React.Component {

  textbooks = [{
    name: 'ICS311 Textbook', quantity: '1', image: 'https://pbs.twimg.com/media/CV6DonNXIAEAfc2.jpg', owner: 'john@foo.com', price: '75$',
    description: 'This is the CLRS textbook that is used in ICS 311. It is in good condition,' +
        'only used it for one semester.',
  },
    {
      name: 'Discrete Math Textbook', quantity: '1', image: 'https://d3525k1ryd2155.cloudfront.net/f/337/930/9780072930337.MH.0.m.jpg', owner: 'john@foo.com', price: '90$',
      description: 'Discrete math textbook for computer science. Helped me a lot during my years at UHM.' +
          'The book is in good condition.',
    },
    {
      name: 'Neurobiology textbook',
      quantity: '1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41zvoQos4yL._SX348_BO1,204,203,200_.jpg',
      owner: 'john@foo.com',
      price: '120$',
      description: 'Neurobiology book used for about 4 years. It is still in good condition.',
    },
    {
      name: 'ICS311 Textbook',
      quantity: '1',
      image: 'https://pbs.twimg.com/media/CV6DonNXIAEAfc2.jpg',
      owner: 'john@foo.com',
      price: '75$',
      description: 'This is the CLRS textbook that is used in ICS 311. It is in good condition,' +
          'only used it for one semester.',
    },
    {
      name: 'ICS311 Textbook',
      quantity: '1',
      image: 'https://pbs.twimg.com/media/CV6DonNXIAEAfc2.jpg',
      owner: 'john@foo.com',
      price: '75$',
      description: 'This is the CLRS textbook that is used in ICS 311. It is in good condition,' +
          'only used it for one semester.',
    },
    {
      name: 'Neurobiology textbook',
      quantity: '1',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41zvoQos4yL._SX348_BO1,204,203,200_.jpg',
      owner: 'john@foo.com',
      price: '120$',
      description: 'Neurobiology book used for about 4 years. It is still in good condition.',
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
          <Card.Group>{this.textbooks.map((sellItem, index) => <SellItem key={index} sellItem={sellItem} />)}</Card.Group>
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
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  return {
    stuffs: Stuffs.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Textbooks);
