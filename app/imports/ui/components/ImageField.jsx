import React, { useEffect, useState } from 'react';
import { connectField } from 'uniforms';
import { useDropzone } from 'react-dropzone';
import { Cloudinary, FileReader } from 'meteor/socialize:cloudinary';
import PropTypes from 'prop-types';
import { Button, Image, Container, Header } from 'semantic-ui-react';

const ImageField = ({ onChange, value, ...props }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    noDrag: true,
    onDrop: (acceptedFiles) => {
      setFiles(
          acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
          })),
      );
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        if (reader.result) {
          const logo = Cloudinary.uploadFile(reader.result);
          logo.then((val) => {
            const { url, public_id } = val;
            this.props.value = url;
            onChange({
              url,
              public_id,
            });
          });
        }
      };
    },
  });

  const thumbs = files.map(file => (
      <div key={file.name}>
        <div>
          <Header as='h5'>Image Preview:</Header>
          <Image src={file.preview} height={'250 px'} width={'250 px'} />
        </div>
      </div>
  ));

  useEffect(
      () => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      },
      [files],
  );

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
      <div className="field form-group">
        <label className="control-label">{capitalizeFirstLetter(props.name)}</label>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Container>Drag and drop some files here, or click to <Button>select files</Button></Container>
        </div>
        <aside>{thumbs}</aside>
      </div>
  );
};

ImageField.propTypes = {
  onChange: PropTypes.function,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connectField(ImageField);
