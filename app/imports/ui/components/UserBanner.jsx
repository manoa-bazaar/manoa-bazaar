import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class UserBanner extends React.Component {
  render() {
    return (
        <div>
        <Grid container>
          <Grid.Row>
            <Image src='images/banner.jpg'/>
          </Grid.Row>
        </Grid>
        </div>
    );
  }
}

export default UserBanner;
