import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2';

import ImageField from '../../ui/components/ImageField';

const ImageSchema = new SimpleSchema({
  image: {
    type: Object,
    uniforms: ImageField,
  },
  'image.url': String,
  'image.public_id': String,
});

export default ImageSchema;
