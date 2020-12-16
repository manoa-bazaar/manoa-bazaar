import SimpleSchema from 'simpl-schema';
import 'uniforms-bridge-simple-schema-2';

import ImageField from '../../ui/components/ImageField';

const ImageSchema = new SimpleSchema({
  logo: {
    type: Object,
    uniforms: ImageField,
  },
  'logo.url': String,
  'logo.public_id': String,
});

export default ImageSchema;
