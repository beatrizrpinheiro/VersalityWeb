<template>
  <v-container>
    <v-row dense>
      <v-col cols="9">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5">
            Administração de Sistemas Gerenciais
          </v-card-title>

          <v-card-subtitle
            >Clique para verificar as datas das aulas, os temas e planos de
            aulas da sua disciplina.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Clique aqui </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5">
            Logística, Distribuição e Infraestrutura
          </v-card-title>

          <v-card-subtitle
            >Clique para verificar as datas das aulas, os temas e planos de
            aulas da sua disciplina.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Clique aqui </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5"> Pesquisa Mercadológica </v-card-title>

          <v-card-subtitle
            >Clique para verificar as datas das aulas, os temas e planos de
            aulas da sua disciplina.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Clique aqui </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="9">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5">
            Teoria Geral da Administração I
          </v-card-title>

          <v-card-subtitle
            >Clique para verificar as datas das aulas, os temas e planos de
            aulas da sua disciplina.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Clique aqui </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
