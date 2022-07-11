import { http } from "./config";

export default {
  get: () => {
    return http.get("termometro");
  },
  salvar: (termometro) => {
    termometro.situacao = termometro.situacao[0];
    return http.post("termometro", termometro);
  },
};
