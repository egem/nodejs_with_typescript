// import { my } from './core/FileManager';

import express from 'express';
import { LogManager } from 'Core/LogManager';
import { LoginController } from 'Controllers/Auth/Login';

const bodyParser = require('body-parser');

const server: express.Application = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const loginHandler = express.Router();
loginHandler.route('/').post(LoginController.post);

server.post('/auth/login', loginHandler);

server.listen(8080, () => {
  LogManager.log('Server is running at port 8080');
});
