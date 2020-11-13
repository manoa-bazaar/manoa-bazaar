import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class SellItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                // floated='right'
                // size='huge'
                width='300px'
                height='300px'
                src={this.props.sellItem.image}
            />
            <Card.Header>{this.props.sellItem.name}</Card.Header>
            <Card.Meta>{this.props.sellItem.price}</Card.Meta>
            <Card.Meta>{this.props.sellItem.owner}</Card.Meta>
            <Card.Description>
              {this.props.sellItem.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
SellItem.propTypes = {
  sellItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(SellItem);
