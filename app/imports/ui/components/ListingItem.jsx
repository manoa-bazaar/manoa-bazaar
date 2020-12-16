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
          <Link to={`/viewitem/${this.props.item._id}`} className='black-card-text'>
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
            <Card.Content extra>
              <Feed>
                {this.props.bids.map((bids, index) => <Bids key={index} bids={bids}/>)}
              </Feed>
            </Card.Content>
          </Link>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ListingItem.propTypes = {
  item: PropTypes.object.isRequired,
  bids: PropTypes.array,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ListingItem);
