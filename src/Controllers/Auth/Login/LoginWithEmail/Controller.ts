import { AuthManagerInterface } from 'Core/Services/AuthManager/interface';
import { Request as RequestBody } from './Model/Request';
import { Request as HttpRequest, Response as HttpResponse } from 'express';

export class LoginWithEmailController {
  constructor(private authManager: AuthManagerInterface) {}

  post(req: HttpRequest, res: HttpResponse) {
    try {
      const request: RequestBody = req.body;
      
      if(!request) {
        res.status(401).send('Error!');
        return;
      }

      if (this.authManager.loginWithEmail(request.email, request.password)) {
        res.status(200).send('Hello');
      } else {
        res.status(401).send();
      }
    } catch (err) {
      console.log('Error! ', err);
      res.status(500).send();
    }
  }
}