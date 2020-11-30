import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Listings } from '../../api/listing/Listing';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** Initialize the database with a default document of listings. */
function addListing(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Listings.collection.insert(data);
}

/** Initialize the Listings collection if empty. */
if (Listings.collection.find().count() === 0) {
  if (Meteor.settings.defaultListings) {
    console.log('Creating default data.');
    Meteor.settings.defaultListings.map(data => addListing(data));
  }
}

if ((Meteor.settings.loadAssetsFile) && (Listings.collection.find().count() < 5)) {
  const assetsFileName = 'data.json';
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.defaultListings.map(item => addListing(item));
}
