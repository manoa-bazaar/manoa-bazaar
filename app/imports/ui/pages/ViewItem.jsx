import React from 'react';
import { Card, Image, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Listings } from '../../api/listing/Listing';

/** Renders the Page for editing a single document. */
class ViewItem extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
          <Card centered>
            <Card.Content>
              <Image
                  // floated='right'
                  // size='huge'
                  width='300px'
                  height='300px'
                  src={this.props.doc.image}
              />
              <Card.Header>{this.props.doc.name}</Card.Header>
              <Card.Meta>Price: {this.props.doc.price}$</Card.Meta>
              <Card.Meta>Condition: {this.props.doc.condition}</Card.Meta>
              <Card.Meta>Quantity: {this.props.doc.quantity}</Card.Meta>
              <Card.Description>
                {this.props.doc.description}
              </Card.Description>
            </Card.Content>
          </Card>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we
 use. */
ViewItem.propTypes = {
  doc: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components.
 https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Listings.itemPublicationName);
  return {
    doc: Listings.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(ViewItem);
