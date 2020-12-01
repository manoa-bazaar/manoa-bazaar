import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single card in the School Items page. See pages/SchoolItems.jsx. */
class SchoolItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                // floated='right'
                // size='huge'
                width='300px'
                height='300px'
                src={this.props.items.image}
            />
            <Card.Header>{this.props.items.name}</Card.Header>
            <Card.Meta>Price: ${this.props.items.price}</Card.Meta>
            <Card.Description>
              {this.props.items.description}
            </Card.Description>
          </Card.Content>
          <Link to={`/viewitem/${this.props.items._id}`}><Button size='small' attached='bottom'>View item</Button></Link>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
SchoolItem.propTypes = {
  items: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(SchoolItem);
