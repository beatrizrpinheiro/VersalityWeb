import { http } from "./config";

export default {
  get: () => {
    return http.get("login");
  },
  salvar: (login) => {
    return http.post("login", login);
  },
};
