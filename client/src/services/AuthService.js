import $api from "../connection/http";

export default class AuthService {
  static async login(email, password) {
    return $api.post("/login", { email, password });
  }

  static async registration(username, email, password) {
    return $api.post("/registration", { username, email, password });
  }

  static async logout() {
    return $api.post("/logout");
  }
}
