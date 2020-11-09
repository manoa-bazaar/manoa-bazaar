import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Categories extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <div className="categories">
          <Grid columns={5}>
            <Grid.Row>
              <Grid.Column>
                <Card as={NavLink} exact to="/textbooks" key="/textbooks">
                  <Image src='https://icon-library.com/images/book-stack-icon/book-stack-icon-10.jpg' wrapped
                         ui={false}/>
                  <Card.Content>
                    <Card.Header>Textbooks</Card.Header>
                    <Card.Meta>New and used textbooks</Card.Meta>
                    <Card.Description>
                      Find new and used textbooks sold by students for students!
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn0.iconfinder.com/data/icons/sugar/64/174_bakery-kitchen-baking-cooking-512.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Kitchenware</Card.Header>
                    <Card.Meta>New and used items for in the kitchen</Card.Meta>
                    <Card.Description>
                      Find new and used kitchen items sold by students for students!
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://img.pngio.com/bedroom-furniture-interior-icon-with-png-and-vector-format-for-black-and-white-png-bed-512_512.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Bedroom items</Card.Header>
                    <Card.Meta>New and used bedroom items</Card.Meta>
                    <Card.Description>
                      Find new and used bedroom items sold by students for students!
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://image.flaticon.com/icons/png/512/120/120128.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>School supplies</Card.Header>
                    <Card.Meta>New and used school supplies</Card.Meta>
                    <Card.Description>
                      Find new and used school supplies sold by students for students!
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image
                      src='https://cdn1.iconfinder.com/data/icons/smoothline-action/30/action_028-detail-more-info-others-512.png'
                      wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Other items</Card.Header>
                    <Card.Meta>Other items</Card.Meta>
                    <Card.Description>
                      Items that you cannot find in the other categories can be found here.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props.
 /** withTracker connects Meteor data to React components.
 https://guide.meteor.com/react.html#using-withTracker */
export default (Categories);
