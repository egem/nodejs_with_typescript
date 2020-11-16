export class AuthManager {
  static login(username: string, password: string): boolean {
    if ('Ege' === username && '12345' === password) {
      return true;
    } else {
      return false;
    }
  }
}