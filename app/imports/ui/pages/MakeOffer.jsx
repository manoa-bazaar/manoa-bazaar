import React from 'react';
import { Grid, Form, TextArea, Image, Divider, Button, Container, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Stuffs } from '../../api/stuff/Stuff';

class MakeOffer extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    Stuffs.collection.insert({ name, quantity, condition, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    return (
        <Grid container columns={2}>
          <Grid.Column>
            <Image src='images/item2.jpg'/>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3'>Columbia South Canyon Diaper Bag Backpack</Header>
            <Divider fitted/>
              <Grid.Column>
                <Grid container columns={2}>
                  <Grid.Column>
              <Header as='h4'>$30.00</Header>
                  </Grid.Column>
                  <Grid.Column>
              <Button color='green'>Buy Now</Button>
                  </Grid.Column>
                </Grid>
                <Header as='h3'>Details</Header>
                <Header as='h4'>Condition:</Header>
                <Container text><p>This is where the user description would go</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Item Category > Item Subcategory</p>
                <p>Listed 4 days ago in Kaneohe</p>
                <Image src='images/map-placeholder.png' size='medium' rounded/>
                </Container>
                <Container>
                  <p>Send seller a message</p>
                <Form>
                  <TextArea placeholder='Is this still available?' fluid />
                </Form>
                </Container>
              </Grid.Column>
          </Grid.Column>
        </Grid>
    );
  }
}

export default MakeOffer;
