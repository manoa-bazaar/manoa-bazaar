import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */
class ListingsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ListingsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      category: {
        type: String,
        allowedValues: ['Textbooks', 'Kitchenware', 'Bedroom Items', 'School Supplies', 'Other Items'],
        defaultValue: 'Textbooks',
      },
      quantity: Number,
      price: Number,
      condition: {
        type: String,
        allowedValues: ['brand new', 'like new', 'lightly used', 'heavily used'],
        defaultValue: 'brand new',
      },
      brand: String,
      description: String,
      image: String,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.itemPublicationName = `${this.category}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Listings = new ListingsCollection();
