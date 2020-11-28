import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Other extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                width='300px'
                height='300px'
                src={this.props.others.image}
            />
            <Card.Header>{this.props.others.name}</Card.Header>
            <Card.Meta>Price: {this.props.others.price}$</Card.Meta>
            <Card.Meta>Condition: {this.props.others.condition}</Card.Meta>
            <Card.Meta>Quantity: {this.props.others.quantity}</Card.Meta>
            <Card.Description>
              {this.props.others.description}
            </Card.Description>
            <Card.Description>
              <Link to={`/viewitem/${this.props.others._id}`}>View Item</Link>
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Other.propTypes = {
  others: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Other);
