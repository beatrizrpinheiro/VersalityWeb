<template>
  <v-container class="frame">
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <label>Escolha a data da aula:</label>
        <v-text-field
          v-model="termometro.date"
          label="Data da Aula"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="termometro.date" scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(date)">
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>
    <label>Escolha uma ou mais situações enfrentadas:</label>
    <v-autocomplete
      v-model="termometro.situacao"
      :items="items"
      outlined
      dense
      chips
      small-chips
      label="Situação em Sala de Aula"
      multiple
    ></v-autocomplete>
    <label>Observações sobre a dinâmica da sala de aula:</label>
    <v-textarea
      outlined
      name="input-7-4"
      label="Relato"
      v-model="termometro.relato"
    ></v-textarea>
    <v-btn color="#ffa500" @click="salvarDados" dark> Enviar </v-btn>

    <v-simple-table class="mg-100">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Situação em Sala de Aula</th>
            <th class="text-left">Relato</th>
            <th class="text-right">Data da Aula</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Termometros" :key="item.id">
            <td>{{ item.situacao }}</td>
            <td>{{ item.relato }}</td>
            <td>{{ formatDate(item.date) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<style>
.padding {
  padding: 50px;
}

.mg-100 {
  align-items: flex-start;
  padding: 20px;
}

.frame {
  border: 1px solid #ccc;
  margin-top: 13px;
  box-shadow: 2px 2px orange;
}
</style>

<script>
import Termometros from "../service/termometros";

export default {
  data: () => ({
    termometro: {
      date: "",
      situacao: "",
      relato: "",
    },

    Termometros: [],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    items: [
      "Alunos introvertidos",
      "Falta de entrosamento entre alunos",
      "Falta de concentração",
      "Falta de respeito em sala",
    ],
    values: [],
    value: null,
  }),
  mounted() {
    this.carregar();
  },
  methods: {
    carregar() {
      Termometros.get().then((res) => {
        this.Termometros = res.data;
      });
    },
    salvarDados() {
      Termometros.salvar(this.termometro).then(() => {
        alert("Seu relato foi salvo com sucesso!");
        this.carregar();
      });
    },
    formatDate(date) {
      date = date.substring(0, 10);
      const [year, month, day] = date.split("-");
      return day + "/" + month + "/" + year;
    },
  },
};
</script>
