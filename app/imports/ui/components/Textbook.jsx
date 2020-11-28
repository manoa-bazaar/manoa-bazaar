import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Textbook extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                // floated='right'
                // size='huge'
                width='300px'
                height='300px'
                src={this.props.books.image}
            />
            <Card.Header>{this.props.books.name}</Card.Header>
            <Card.Meta>Price: {this.props.books.price}$</Card.Meta>
            <Card.Meta>Condition: {this.props.books.condition}</Card.Meta>
            <Card.Meta>Quantity: {this.props.books.quantity}</Card.Meta>
            <Card.Description>
              {this.props.books.description}
            </Card.Description>
            <Card.Description>
              <Link to={`/viewitem/${this.props.books._id}`}>View Item</Link>
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Textbook.propTypes = {
  books: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Textbook);
