import React from 'react';
import { Button, Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Bids from './Bids';

/** Renders a single card in the Kitchen category page. See pages/KitchenItems.jsx. */
class ListingItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Link to={`/viewitem/${this.props.item._id}`}>
            <Card.Content>
              <Image
                  // floated='right'
                  // size='huge'
                  width='300px'
                  height='300px'
                  src={this.props.item.image}
              />
              <Card.Header>{this.props.item.name}</Card.Header>
              <Card.Meta>Price: ${this.props.item.price}</Card.Meta>
              <Card.Description>
                {this.props.item.description}
              </Card.Description>
            </Card.Content>
            <Button id='view-item-card' size='small' attached='bottom'>View item</Button>
          </Link>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ListingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ListingItem);
