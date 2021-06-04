# Ecommerce api

## Description

Ecommerce api is a REST API project developed in JavaScript using Express Web Framework for educational purposes

## Requeriments

- Node v15.12.0

All the dependencies are listed in the [package.json](package.json) file

## Usage

You can use the deployed version [here](https://ecommerceapiexpress.herokuapp.com/) and directly make use of the Available endpoints or clone the repository and make use of this project locally (See: [Installation](#installation))

### Installation

First at all, you will need to clone this repo. You can use your favorite CLI, just type the following command:

    git clone https://github.com/oimoralest/e_commerce_api.git --depth 1 && cd e_commerce_api

To install all the dependencias just type:

    npm install

You have to create following environment variables in a .env file:

- API_URL = /api/v1 You can choose another prefix but notice that all the endpoints described in [Available enpoints](#available-endpoints) use this prefix.
- SECRET = A super secret to generate the tokens
- CONNECTION_STRING = URI to your database on Atlas MongoDB (e.g. CONNECTION_STRING = mongodb+srv://**user**:**password**@cluster0.ens7j.mongodb.net/**database_name**?retryWrites=true&w=majority)

### Running the app

To run the app just type:

    npm start

### Available endpoints

Available endpoints are listed in the home page:

<http://localhost:8000/> or <https://ecommerceapiexpress.herokuapp.com/>
