"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAddNFT = exports.mockFindAllNFTs = exports.mockFindOneNFT = void 0;
const mongodb_1 = require("mongodb");
const nft = {
    name: 'SOL Parasite #4679',
    description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
    image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
    external_url: 'https://solparasites.com',
    origin: {
        name: 'SOL Parasite #4679',
        symbol: 'PRST',
        description: '10,000 NFT Parasites finding their hosts on the Solana Blockchain.',
        seller_fee_basis_points: 1900,
        image: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
        external_url: 'https://solparasites.com',
        attributes: [],
        collection: {
            name: 'SOL Parasites',
        },
        properties: {
            files: [
                {
                    uri: 'https://sol-parasites.s3.us-west-2.amazonaws.com/img/4679.jpg',
                    type: 'image/jpeg',
                },
            ],
            category: 'image',
            creators: [
                {
                    address: '8bZXQYaU3eHQG9mzzrM7aHMkedmuNaZsHq4unYCw6VTm',
                    share: 100,
                },
            ],
        },
    },
};
const mockFindOneNFT = (galleryId, nftId) => {
    return {
        _id: nftId,
        galleryId,
        nft,
    };
};
exports.mockFindOneNFT = mockFindOneNFT;
const mockFindAllNFTs = (galleryId) => [
    (0, exports.mockFindOneNFT)(galleryId, new mongodb_1.ObjectId()),
    (0, exports.mockFindOneNFT)(galleryId, new mongodb_1.ObjectId()),
];
exports.mockFindAllNFTs = mockFindAllNFTs;
const mockAddNFT = () => ({
    galleryId: new mongodb_1.ObjectId(),
    nft,
});
exports.mockAddNFT = mockAddNFT;
