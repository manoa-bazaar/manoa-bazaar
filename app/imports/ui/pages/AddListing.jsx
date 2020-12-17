import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Listings } from '../../api/listing/Listing';
import ImageField from '../components/ImageField';

const formSchema = new SimpleSchema({
  name: String,
  quantity: Number,
  price: Number,
  category: {
    type: String,
    allowedValues: ['Textbooks', 'Kitchenware', 'Bedroom Items', 'School Supplies', 'Other Items'],
    defaultValue: 'Textbooks',
  },
  condition: {
    type: String,
    allowedValues: ['brand new', 'like new', 'lightly used', 'heavily used'],
    defaultValue: 'brand new',
  },
  description: String,
  brand: String,
  image: {
    type: 'string',
    uniforms: { component: ImageField },
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddStuff extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, price, category, condition, brand, description, image } = data;
    const owner = Meteor.user().username;
    const imageurl = image.url;
    Listings.collection.insert({ name, category, quantity, price, condition, brand, description, image, owner },
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
        <Grid container centered id="add-listing-page">
          <Grid.Column>
            <Header as="h2" textAlign="center">List Item for Sale</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name' id='name'/>
                <SelectField name='category' id='category' />
                <NumField name='quantity' id='quantity' decimal={false}/>
                <NumField name='price' id='price' decimal={true} />
                <SelectField name='condition' id='condition'/>
                <TextField name='brand' id='brand'/>
                <LongTextField name='description' id='description'/>
                <ImageField name='image' id='image'/>
                <SubmitField value='Submit' id='add-listing-submit'/>
                <ErrorsField id='errors' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddStuff;
