import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListListingAdmin.jsx. */
class ListingItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.listing.name}</Table.Cell>
          <Table.Cell>{this.props.listing.quantity}</Table.Cell>
          <Table.Cell>${this.props.listing.price}</Table.Cell>
          <Table.Cell><Image height={'100 px'} width={'100 px'} src={this.props.listing.image} /></Table.Cell>
          <Table.Cell>{this.props.listing.category}</Table.Cell>
          <Table.Cell>{this.props.listing.condition}</Table.Cell>
          <Table.Cell>{this.props.listing.brand}</Table.Cell>
          <Table.Cell>{this.props.listing.description}</Table.Cell>
          <Table.Cell>{this.props.listing.owner}</Table.Cell>
          <Table.Cell><Link to={`/edit/${this.props.listing._id}`}>Edit</Link></Table.Cell>
          <Table.Cell><Link to={`/delete/${this.props.listing._id}`}>Delete</Link></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ListingItemAdmin.propTypes = {
  listing: PropTypes.object.isRequired,
};

export default withRouter(ListingItemAdmin);
