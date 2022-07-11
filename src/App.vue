<template>
  <v-app id="inspire">
    <v-navigation-drawer
      width="330"
      class="flyout"
      v-model="drawer"
      app
      v-if="notIsLoginPage"
    >
      <v-list-item>
        <v-list-item-content color="orange">
          <v-list-item-title class="text-h6">
            Profa. Beatriz Pinheiro
          </v-list-item-title>
          <v-list-item-subtitle class="email">
            beatriz.pinheiro@professor.faip.edu.br
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="bottom" v-if="notIsLoginPage">
      <v-app-bar-nav-icon
        class="hamburguer"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="title">{{
        setTitle($route.name)
      }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Métodos Ativos",
        icon: "mdi-google-classroom",
        to: "/metodos-ativos-de-aprendizagem",
      },
      {
        title: "Planos de Ensino",
        icon: "mdi-file-document-multiple",
        to: "/planos-de-ensino",
      },

      {
        title: "Planos de Aula",
        icon: "mdi-notebook-edit-outline",
        to: "/planos-de-aula",
      },

      {
        title: "Termomêtro de Sala",
        icon: "mdi-thermometer",
        to: "/termometro-de-sala",
      },
    ],

    tool: {
      title: "Planos de Ensino",
    },
  }),
  computed: {
    notIsLoginPage() {
      console.log(this.$router.name);
      return this.$route.name !== "Login";
    },

    setNameTitleToolbar() {
      console.log(this.$router.name);
      return this.$route.name == "PlanosEnsino";
    },
  },
  methods: {
    setTitle(route) {
      switch (route) {
        case "PlanosEnsino":
          return "Planos de Ensino";
        case "PlanosAula":
          return "Planos de Aula";
        case "Termometro":
          return "Avaliação da Sala de Aula";
        case "MetodosAtivos":
          return "Métodos Ativos de Aprendizagem";
        case "Home":
          return "Versality System - Educação 4.0";
      }
    },
  },
};
</script>

<style>
.email {
  font-size: small !important;
}
.bottom {
  background-color: #ffa500 !important;
}
.title {
  color: white;
}
.hamburguer {
  color: white !important;
}

@media (min-width: 1264px) {
  .container {
    max-width: 98% !important;
  }
}
</style>
