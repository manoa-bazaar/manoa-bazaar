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
                  <Image src='https://d.newsweek.com/en/full/59117/kap2611-technology-textbooks.jpg?w=1600&h=1600&q=88&f=ff093339934fb2d9734f9cea52d446ac' wrapped
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
                      src='https://pyxis.nymag.com/v1/imgs/29c/91b/fef7ee5dd274755481e580ee0933f6db19-Home-Hero-Kitchen-Utensil-Set-lede.rsquare.w700.jpg'
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
                      src='https://www.alisondeyette.com/wp-content/uploads/dorm-room-design-ideas.jpg'
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
                      src='https://sep.yimg.com/ay/vickerey/clairefontaine-basics-large-spiral-bound-notebook-with-pockets-6-x-8-25-9.jpg'
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
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png'
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
