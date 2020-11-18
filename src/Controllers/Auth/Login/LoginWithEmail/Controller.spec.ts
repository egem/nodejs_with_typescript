import { LoginWithEmailController } from './Controller';
import { AuthManagerFirebase } from 'Core/Services/AuthManager/firebase';
import { Request as HttpRequest, Response as HttpResponse } from 'express';

describe('User sends login request', () => {
  let authManager: AuthManagerFirebase;
  let controller: LoginWithEmailController;
  let res: HttpResponse;

  beforeEach(() => {
    
    authManager = jasmine.createSpyObj(['loginWithEmail']);
    // (authManager.login as jasmine.Spy).and.returnValue(true);
    controller = new LoginWithEmailController(authManager);

    res = jasmine.createSpyObj(['status', 'send']);
    (res.status as jasmine.Spy).and.returnValue(res);
    (res.send as jasmine.Spy).and.returnValue(res);

  });

  describe('Credential are correct', () => {
    it('should send 200 status code', () => {
      // Arrange
      const req = {
        body: {
          email: 'email',
          password: 'password'
        }
      };

      (authManager.loginWithEmail as jasmine.Spy).and.returnValue(true);

      // Act
      controller.post(req as HttpRequest, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('Request body is null', () => {
    it('should send 401 "Bad Request" status code', () => {

      // Arrange
      const req = {
        body: null
      };

      (authManager.loginWithEmail as jasmine.Spy).and.returnValue(false);

      // Act
      controller.post(req as HttpRequest, res);
  
      // Assert
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('Email is missing', () => {
    it('should send 401 "Bad Request" status code', () => {
      // Arrange
      const req = {
        body: {
          password: 'password'
        }
      };

      (authManager.loginWithEmail as jasmine.Spy).and.returnValue(false);

      // Act
      controller.post(req as HttpRequest, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('Password is missing', () => {
    it('should send 401 "Bad Request" status code', () => {
      // Arrange
      const req = {
        body: {
          email: 'email'
        }
      };

      (authManager.loginWithEmail as jasmine.Spy).and.returnValue(false);

      // Act
      controller.post(req as HttpRequest, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalled();
    });
  });

});