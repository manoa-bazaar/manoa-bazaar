import React from 'react';
import { Cloudinary, Photo, Component } from 'meteor/socialize:cloudinary';

export class Uploader extends Component {
  onChange = (e) => {
    const uploads = Cloudinary.uploadFiles(e.currentTarget.files);
    uploads.forEach(async (response) => {
      const photoData = await response;
      new Photo(photoData).save();
    });
  }

  render() {
    return (
        <input type="file" accept="image/*" multiple onChange={this.onChange} />
    );
  }
}
