import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Listings } from '../../api/listing/Listing';
import { Users } from '../../api/users/User';

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

if ((Meteor.settings.loadAssetsFile) && (Listings.collection.find().count() === 0)) {
  const assetsFileName = 'data.json';
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.defaultListings.map(item => addListing(item));
}

function addUser(data) {
  console.log(`  Adding: ${data.screenname} (${data.owner})`);
  Users.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Users.collection.find().count() === 0) {
  if (Meteor.settings.defaultUserInfo) {
    console.log('Creating default userInfo.');
    Meteor.settings.defaultUserInfo.map(data => addUser(data));
  }
}
