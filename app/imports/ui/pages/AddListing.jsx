import React from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Listings } from '../../api/listing/Listing';

const bridge = new SimpleSchema2Bridge(Listings.schema);

/** Renders the Page for adding a document. */
class AddStuff extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, quantity, price, category, condition, description } = data;
    const owner = Meteor.user().username;
    Listings.collection.insert({ name, quantity, category, condition, price, description, owner },
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
                <SelectField name='category' />
                <NumField name='quantity' decimal={false}/> <NumField name='price' decimal={true} />
                <SelectField name='condition'/>
                <LongTextField name='description'/>
                <Button content="Upload Image" labelPosition="left" icon="camera" onClick={() => this.fileInputRef.current.click()} />
                <input ref={this.fileInputRef} type="file" hidden onChange={this.fileChange} />
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
