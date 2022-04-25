import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    nft(galleryId: String, _id: String): NFT!
    nfts(galleryId: String): [NFT]!
  }

  type NFT {
    _id: String!
    galleryId: String!
    nft: NFTDocument
  }

  type NFTDocumentOriginCollection {
    name: String!
  }

  type NFTDocumentOriginProperties {
    files: [NFTDocumentOriginPropertiesFiles]
    category: String
    creators: [NFTDocumentOriginPropertiesCreators]
  }
  type NFTDocumentOriginPropertiesFiles {
    uri: String
    type: String
  }
  type NFTDocumentOriginPropertiesCreators {
    address: String
    share: Int
  }

  type NFTDocumentOrigin {
    name: String!
    Symbol: String!
    description: String!
    seller_fee_basis_points: String
    image: String!
    external_url: String!
    collection: NFTDocumentOriginCollection
    properties: NFTDocumentOriginProperties
  }

  type NFTDocument {
    name: String!
    description: String!
    image: String!
    external_url: String!
    origin: NFTDocumentOrigin
  }

  # input InputNFTDocument {
  #   name: String!
  #   description: String!
  #   image: String!
  #   external_url: String!
  #   origin: NFTDocumentOrigin
  # }

  extend type Mutation {
    createNFT(galleryId: String, nft: String!): Boolean
  }
`;
