import { AuthManager } from 'Core/AuthManager';
import { Request } from './Model/Request';

export class LoginController {
  static post(req: any, res: any) {
    try {
      const request: Request = req.body;

      if (AuthManager.login(request.username, request.password)) {
        res.send('Hello');
      } else {
        res.status(401).send('Error!');
      }
    } catch (err) {
      console.log('Error! ', err);
      res.status(500).send('Error');
    }
  }
}