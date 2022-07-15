<template>
  <v-container>
    <v-simple-table class="tablePlanos">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Data da aula</th>
            <th class="text-left">Tema da aula</th>
            <th class="text-left">Acesso ao plano de aula</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in disciplinas" :key="item.tema">
            <td>{{ item.data }}</td>
            <td>{{ item.tema }}</td>
            <td>
              <v-btn v-on:click="redirect" depressed color="primary">
                Acessar Plano de Aula
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      disciplinas: [
        {
          data: "06/08/2022",
          tema: "Administração Científica",
        },
        {
          data: "13/08/2022",
          tema: "Teoria Clássica",
        },
        {
          data: "20/08/2022",
          tema: "Teoria das Relações Humanas",
        },
        {
          data: "27/08/2022",
          tema: "Teoria da Burocracia",
        },
        {
          data: "03/09/2022",
          tema: "Teoria Estruturalista",
        },
        {
          data: "17/10/2022",
          tema: "Teoria dos Sistemas",
        },
        {
          data: "24/10/2022",
          tema: "Teoria Comportamental",
        },
      ],
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "PlanosAula" });
    },
  },
};
</script>

<style></style>
