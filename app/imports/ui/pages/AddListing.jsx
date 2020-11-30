import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, LongTextField, HiddenField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Listings } from '../../api/listing/Listing';

const bridge = new SimpleSchema2Bridge(Listings.schema);

/** Renders the Page for adding a document. */
class AddStuff extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, price, category, condition, brand, description, image } = data;
    const owner = Meteor.user().username;
    console.log(owner);
    Listings.collection.insert({ name, quantity, category, condition, price, brand, description, image, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">List Item for Sale</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <Grid.Row>
                  <SelectField name='category' />
                  <NumField name='quantity' decimal={false}/> <NumField name='price' decimal={true} />
                  <SelectField name='condition'/>
                </Grid.Row>
                <TextField name='brand'/>
                <LongTextField name='description'/>
                <TextField name='image'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddStuff;
