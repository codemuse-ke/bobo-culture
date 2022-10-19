Initial setup
1. Install and set up React
The simplest and quickest way to get started with a React project is to use the create-react-app command. To create a project, run:

yarn create-react-app your-project-name
# OR
npx create-react-app your-project-name

Change directory into your project folder:

cd your-project-name
Change directory into your project folder:

cd your-project-name
2. Store the public key in an environment variable file
Create a .env to store the public key.

touch .env
Open up your the .env file and add your Chec public key:

# Public key from Chec's demo merchant account
REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec
3. Start your local HTTP server and run your development environment
yarn start
# OR
npm start


2. Add Commerce.js to the application

1. Install Commerce.js
In order to communicate with the Chec API and fetch data from the backend, install the Commerce.js SDK:

yarn add @chec/commerce.js
# OR
npm install @chec/commerce.js
2. Create a Commerce.js instance
The Commerce.js SDK comes packed with all the frontend oriented functionality to get a customer-facing web-store up and running. To use the SDK, import the module in a folder called lib so you have access to the Commerce object instance throughout your application.

Go ahead and do that right now! In your src directory, create a new folder called lib, create a file commerce.js and copy and paste the below code in it. A lib folder in a project typically stores files that abstracts functions or some form of data.

// src/lib/commerce.js

import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error('Your public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami');
}

export default new Commerce(
  checAPIKey,
  devEnvironment,
  commerceConfig,
);
Above, you've imported the Commerce object, then exported the instance with your Chec API key provided via an environment variable. The public key is needed to give you access to data via the Chec API.

A good idea is to throw throw an error if the public key isn't available, since it will probably make your application unusable.

3. The commerce object
In order to have access to your commerce instance exported in /lib/Commerce.js, import it to every component needing to make requests to the Chec API:

import { commerce } from './lib/commerce';
The commerce object will then be available to make Commerce.js requests with.

