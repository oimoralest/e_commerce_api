// Gets enviroment variables
require('dotenv/config');
const api = process.env.API_URL;

// Importing
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

// CONSTANTS
const port = process.env.PORT || 8000;
const host = process.env.HOST || '0.0.0.0'

// Creates app
const app = express();

// Protecting the app
app.use(helmet());

// Enables CORS
app.use(cors());
app.options('*', cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(authJwt());
app.use(express.static('public'));
app.use(errorHandler);

// Setting views
app.set('views', process.cwd() + '/views');
app.set('view engine', 'pug');

// Routes
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);

// home page
app.get('/', (req, res) => {
	res.render('home', {
		host: host,
		port: port,
		api: api,
	});
});

// Connects to mongo cloud
mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Database connection was made successfully');
	})
	.catch((err) => {
		console.log(err);
	});

// Creates the server
httpsServer = https.createServer(
	{
		key: fs.readFileSync('apache-selfsigned.key'),
		cert: fs.readFileSync('apache-selfsigned.crt'),
	},
	app
);
httpsServer.listen(port, host , () => {
	console.log(`API is running https://${host}:${port}${api}`);
});
