import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Textbook extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                width='300px'
                height='300px'
                src={this.props.textBook.image}
            />
            <Card.Header>{this.props.textBook.name}</Card.Header>
            <Card.Meta>Price: {this.props.textBook.price}</Card.Meta>
            <Card.Meta>Condition: {this.props.textBook.condition}</Card.Meta>
            <Card.Meta>Quantity: {this.props.textBook.quantity}</Card.Meta>
            <Card.Description>
              {this.props.textBook.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Textbook.propTypes = {
  textBook: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Textbook);
