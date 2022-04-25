import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    gallery(_id: String): Gallery!
    galleries: [Gallery]!
  }
  type Gallery {
    _id: String!
    name: String!
    ownerId: String!
  }
  extend type Mutation {
    createGallery(_id: String, name: String!, ownerId: String!): Boolean
  }
`;
