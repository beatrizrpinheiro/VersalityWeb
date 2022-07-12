<template>
  <v-container>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item color="red lighten-2" icon="mdi-star" fill-dot>
        <v-card dark color="red lighten-2">
          <v-card-title class="text-h6"> Objetivo da Aula </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              {{ planosaula[0].objetivo }}
            </p>
            <v-btn class="mx-0" outlined> Button </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="purple darken-1" icon="mdi-book-variant" fill-dot>
        <v-card color="purple darken-1" dark>
          <v-card-title class="text-h6"> Método Ativo </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              {{ planosaula[0].metodo }}
            </p>
            <v-btn class="mx-0" outlined> Button </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="green lighten-1" icon="mdi-airballoon" fill-dot>
        <v-card dark color="green lighten-1">
          <v-card-title class="text-h6"> Processual </v-card-title>
          <v-card-text class="white text--primary">
            <p v-html="planosaula[0].processual">
              {{ planosaula[0].processual }}
            </p>
            <v-btn class="mx-0" outlined> Button </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style>
.margin-top10 {
  margin-top: 5%;
  align-items: center;
}
</style>

<script>
import Planos from "../service/planosaula";

export default {
  data: () => ({
    planosaula: [
      {
        atividade: "",
        objetivo: "",
        metodo: "",
        processual: "",
      },
    ],
  }),

  mounted() {
    Planos.listar().then((resposta) => {
      console.log(resposta.data);
      this.planosaula = resposta.data;
    });
  },
};
</script>
