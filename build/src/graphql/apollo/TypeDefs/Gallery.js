"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql) `
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
