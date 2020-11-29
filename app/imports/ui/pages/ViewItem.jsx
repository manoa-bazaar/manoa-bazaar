import React from 'react';
import { Loader, Image, Header, Container, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <div>
          <Container textAlign='center'><Header as='h2'>{this.props.doc.name}</Header>
            <Image src={this.props.doc.image} size='medium' centered></Image></Container>
          <Container textAlign='justified'>
            <b>Price:</b>
            <p>
              ${this.props.doc.price}
            </p>
            <b>Items available:</b>
            <p>
              {this.props.doc.quantity}
            </p>
            <b>Condition of this item:</b>
            <p>
              {this.props.doc.condition}
            </p>
            <b>Description:</b>
            <p>
              {this.props.doc.description}
            </p>
            <Link to={`/makeoffer/${this.props.doc._id}`}><Button size='big' content='Make an offer' /></Link>
          </Container>
        </div>
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
