import React from 'react';
import { Grid, Image, Divider, Button, Container, Header, Loader, Card } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Listings } from '../../api/listing/Listing';
import { Bids } from '../../api/bids/Bids';

class ViewItem extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Listings.collection.insert({ name, quantity, condition, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Grid container columns={2}>
          <Grid.Column>
            <Image src={this.props.doc.image} size='medium' centered></Image>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3'>${this.props.doc.name}</Header>
            <Divider fitted/>
            <Grid.Column>
              <Grid container columns={2}>
                <Grid.Column>
                  <Header as='h4'>${this.props.doc.price}</Header>
                </Grid.Column>
                <Grid.Column>
                  <Button color='green'>Buy Now</Button>
                </Grid.Column>
              </Grid>
              <Header as='h3'>Details</Header>
              <Header as='h4'>Condition: {this.props.doc.condition} </Header>
              <Container text><p>{this.props.doc.description}</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Item Category > Item Subcategory</p>
                <p>Listed 4 days ago in Kaneohe</p>
                <Image src='images/map-placeholder.png' size='medium' rounded/>
              </Container>
              <Card.Group>
                {this.props.doc.map((listing, index) => <Listings
                    key={index}
                    listing={listing}
                    bids={this.props.bids.filter(bid => (bid.contactId === listing._id))}/>)}
              </Card.Group>
            </Grid.Column>
          </Grid.Column>
        </Grid>
    );
  }
}

ViewItem.propTypes = {
  doc: PropTypes.object,
  bids: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components.
 https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Listings.itemPublicationName);
  const subscription2 = Meteor.subscribe(Bids.itemPublicationName);
  return {
    doc: Listings.collection.findOne(documentId),
    bids: Bids.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ViewItem);
