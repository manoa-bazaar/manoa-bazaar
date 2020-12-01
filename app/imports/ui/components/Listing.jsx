import React from 'react';
import { Card, Feed, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import EditListing from '../pages/EditListing';
import Bids from './Bids';

/** Renders a single card in the List Contacts table. See pages/ListContacts.jsx. */
class Listing extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={this.props.listing.image}
            />
            <Card.Header>{this.props.listing.name}</Card.Header>
            <Card.Meta>{this.props.listing.brand}</Card.Meta>
            <Card.Description>{this.props.listing.price}</Card.Description>
            <Card.Description>{this.props.listing.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.listing._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <EditListing owner={this.props.listing.owner} contactId={this.props.listing._id}/>
          </Card.Content>
          <Card.Content extra>
            <Feed>
              {this.props.bids.map((bids, index) => <Bids key={index} bids={bids}/>)}
            </Feed>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Listing.propTypes = {
  listing: PropTypes.object.isRequired,
  bids: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Listing);
