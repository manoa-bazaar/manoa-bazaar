import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Cloudinary } from 'meteor/socialize:cloudinary';
import App from '../../ui/layouts/App.jsx';

/** Startup the application by rendering the App layout component. */
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));  // eslint-disable-line
});

Cloudinary.config({
  cloud_name: 'cloud_name',
  api_key: 'Your Key Here',
});
