import { Meteor } from 'meteor/meteor';
import { Cloudinary } from 'meteor/socialize:cloudinary';

Cloudinary.config({
  cloud_name: 'manoa-bazaar',
  api_key: '838583519727789',
  api_secret: 'MlqQ8EKeuTwtWK1L-Ka8_6gFIcs',
});

// Rules are bound to the connection from which they are are executed.
// This means you have a userId available as this.userId if there is a logged in user.
// Throw a new Meteor.Error to stop the method from executing and propagate the error to the client.
// If rule is not set a standard error will be thrown.
Cloudinary.rules.delete = function (publicId) {
  if (!this.userId && !publicId) throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
};

Cloudinary.rules.sign_upload = function () {
  if (!this.userId) throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
};

Cloudinary.rules.private_resource = function (publicId) {
  if (!this.userId && !publicId) throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
};

Cloudinary.rules.download_url = function (publicId) {
  if (!this.userId && !publicId) throw new Meteor.Error('Not Authorized', "Sorry, you can't do that!");
};
