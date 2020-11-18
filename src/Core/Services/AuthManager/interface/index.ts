export interface AuthManagerInterface {
  loginWithEmail(email: string, password: string): boolean;
  signupWithEmail(email: string, password: string): boolean;
}