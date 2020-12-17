import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, TextField, HiddenField, SubmitField, ErrorsField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Bids } from '../../api/bids/Bids';

const bridge = new SimpleSchema2Bridge(Bids.schema);

/** Renders the Page for adding a document. */
class AddBid extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { bid, owner, createdAt } = data;
    Bids.collection.insert({ bid, owner, createdAt },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Bid added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
          <Segment>
            <TextField label="Have your own Bid?" name='bid'/>
            <SubmitField value='Submit'/>
            <ErrorsField/>
            <HiddenField name='owner' value={this.props.owner}/>
            <HiddenField name='createdAt' value={new Date()}/>
          </Segment>
        </AutoForm>
    );
  }
}

AddBid.propTypes = {
  owner: PropTypes.string.isRequired,
  contactId: PropTypes.string,
};

export default AddBid;
