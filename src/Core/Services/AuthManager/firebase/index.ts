import { AuthManagerInterface } from 'Core/Services/AuthManager/interface';

export class AuthManagerFirebase implements AuthManagerInterface {
  loginWithEmail(email: string, password: string): boolean {
    if ('email' === email && 'password' === password) {
      return true;
    } else {
      return false;
    }
  }

  signupWithEmail(email: string, password: string): boolean {
    return true;
  }
}