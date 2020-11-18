// import { my } from './core/FileManager';

import express from 'express';
import { LogManager } from 'Core/Services/LogManager';
import { AuthManagerFirebase } from 'Core/Services/AuthManager/firebase';
import { LoginWithEmailController } from './Controllers/Auth/Login/LoginWithEmail/Controller';

const bodyParser = require('body-parser');

const server: express.Application = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const authManager = new AuthManagerFirebase();

const loginHandler = express.Router();
const loginWithEmailController = new LoginWithEmailController(authManager);

loginHandler.route('/loginWithEmail').post(loginWithEmailController.post);

server.post('/auth/login', loginHandler);

server.listen(8080, () => {
  LogManager.log('Server is running at port 8080');
});
