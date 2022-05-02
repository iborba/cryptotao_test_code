This is a WIP!

This project is a code-challenge for CryptoTao Full-stack position, originally made with NodeJs, Express, Typescript, Husky, Web3.js, Solana, Jest and other cool stuff.

* To run tests locally, you can run `$ npm test`

* To run your project locally, you can run `$ npm run start:dev `
Then, in your preferred client, try this request: curl --request GET --url http://localhost:3000/api and you'll receive a Hello World message

There is one file called *insomnia-collection.json* on which you can run all endpoints made.

In order to run the solution in docker, please run:
`$ npm run build`
`$ docker build . -t api-cryptotao-test-code`
`$ npm run docker:up`
