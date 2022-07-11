<template>
  <v-container>
    <div class="general">
      <div style="width: 100%">
        <v-text-field
          class="search"
          v-model="search"
          placeholder="Digite o nome da sua disciplina"
          solo
          clearable
        ></v-text-field>
      </div>
      <div class="ml-20">
        <v-btn color="#FFA500" fab dark v-on:click="itemsFiltered">
          <v-icon>mdi-feature-search</v-icon>
        </v-btn>
      </div>
    </div>
    <v-simple-table
      class="tablePlanos"
      :planos="itemsFiltered"
      :search="search"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Disciplina</th>
            <th class="text-left">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itemsFiltered" :key="item">
            <td>{{ item }}</td>
            <td>
              <v-btn
                class="ma-2"
                outlined
                small
                fab
                color="black"
                v-on:click="download(item)"
              >
                <v-icon>mdi-cloud-download</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import axios from "axios";
import Files from "../service/planos";

export default {
  data() {
    return {
      search: "",
      planos: [],
    };
  },

  mounted() {
    Files.listar().then((resposta) => {
      console.log(resposta.data);
      this.planos = resposta.data;
    });
  },

  computed: {
    itemsFiltered() {
      let valores = [];
      valores = this.planos.filter((item) => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });

      return valores;
    },
  },

  methods: {
    async download(name) {
      const getPromisse = axios({
        url: "https://localhost:44343/file?name=" + name,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const contentDisposition = response.headers["content-disposition"];
        const filenameRegex = /filename[^;=\n]=((['"]).?\2|[^;\n]*)/;
        const match = contentDisposition.match(filenameRegex);

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;

        let fileName = "";
        if (match) {
          fileName = match[1];
        }
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
      });

      return getPromisse;
    },
  },
};
</script>

<style>
.general {
  display: flex;
  padding: 25px;
  align-items: baseline;
  justify-content: center;
}

.ml-20 {
  margin-left: 20px;
}

.search {
  width: 100%;
}

.tablePlanos {
  margin: 10px 10px 20px 20px;
}
</style>
