import { http } from "./config";

export default {
  download: (name) => {
    return http.get("file?name=" + name);
  },
};
