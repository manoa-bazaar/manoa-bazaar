import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Listings } from '../../api/listing/Listing';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addItems(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Listings.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

if (Listings.collection.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating default data.');
    Meteor.settings.defaultItems.map(data => addItems(data));
  }
}
