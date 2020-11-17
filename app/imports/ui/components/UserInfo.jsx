import React from 'react';
import { Grid, Rating, Image, Divider } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserInfo extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' container>
          <Grid.Row columns={2}>
            <Grid.Column floated='left'>
              <Image id="icon-space" size='small' circular src='images/cat-icon.jpg'/>
            </Grid.Column>
            <Grid.Column>
              <h2>kittyjewel7981</h2>
              <Rating icon='star' defaultRating={4} maxRating={5} />
              <h4>80 items listed | 78 sales</h4>
               Welcome to my store!! Shipping from california :) Msg me for more info
          </Grid.Column>
          </Grid.Row>
          <Divider fitted/>
          <Grid.Row columns={4}>
            <Grid.Column size={1}>
              <Image id="img-size" src='images/item1.jpg'/>
              Louis Vuitton Palermo Monogram GM Brown
              <h4>$1050</h4>
            </Grid.Column>
            <Grid.Column>
              <Image id="img-size" src='images/item2.jpg'/>
              Columbia South Canyon Diaper Bag Backpack
              <h4>$13</h4>
            </Grid.Column>
            <Grid.Column>
              <Image id="img-size" src='images/item3.jpg'/>
              Blair Ritchey Penn Carryall in Chestnut
              <h4>$320</h4>
            </Grid.Column>
            <Grid.Column>
              <Image id="img-size" fluid src='images/item4.jpg'/>
              Pokemon action figure lot
              <h4>$10</h4>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column size={1}>
              <Image id="img-size" src='images/item5.jpg'/>
              Hello Kitty popcorn tokidoki figure
              <h4>$5</h4>
            </Grid.Column>
            <Grid.Column>
              <Image id="img-size" src='images/item6.jpg'/>
              Tokidoki turtle
              <h4>$5</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default UserInfo;
