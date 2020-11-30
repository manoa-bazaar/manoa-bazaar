import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class BedroomItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                // floated='right'
                // size='huge'
                width='300px'
                height='300px'
                src={this.props.bedroomitems.image}
            />
            <Card.Header>{this.props.bedroomitems.name}</Card.Header>
            <Card.Meta>Price: {this.props.bedroomitems.price}$</Card.Meta>
            <Card.Description>
              {this.props.bedroomitems.description}
            </Card.Description>
          </Card.Content>
          <Link to={`/viewitem/${this.props.bedroomitems._id}`}><Button size='small' attached='bottom'>View item</Button></Link>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
BedroomItem.propTypes = {
  bedroomitems: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(BedroomItem);
