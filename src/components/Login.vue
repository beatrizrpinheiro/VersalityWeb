<template>
  <div class="inicio">
    <v-app id="inspire" class="fundo">
      <v-content>
        <v-snackbar v-model="sucesso">
          Usuário logado com sucesso
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <v-snackbar v-model="invalido">
          Login inválido
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md5>
              <v-card class="elevation-12">
                <v-toolbar dark color="#FFA500">
                  <v-toolbar-title
                    >Versality System - Educação 4.0</v-toolbar-title
                  >
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      name="login"
                      label="Login"
                      type="text"
                      v-model="login.usuario"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="login.senha"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :loading="isLoading"
                    @click="salvarLogin"
                    color="#FFA500"
                    class="labelButton"
                    >Login <v-icon left> mdi-login-variant </v-icon></v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<style>
.fundo {
  background-image: url(https://tgnsistemas.com/wp-content/uploads/2017/09/Websites-TGN-Sistemas-Fundo-Login.jpg) !important;
}
</style>
<script>
import login from "@/service/login";

export default {
  data: () => ({
    sucesso: false,
    invalido: false,
    isLoading: false,
    login: {
      usuario: "",
      senha: "",
    },
    name: "Login",
    props: {
      source: String,
    },
  }),

  methods: {
    stateChange() {
      const instance = this;
      setTimeout(function () {
        this.isLoading = false;
        instance.$router.push("Home");
      }, 1000);
    },
    salvarLogin() {
      const instance = this;
      this.isLoading = true;

      login
        .salvar(this.login)
        .then((res) => {
          instance.sucesso = true;

          this.stateChange();

          console.log(res);
        })
        .catch(() => {
          this.invalido = true;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
.labelButton {
  background-color: #ffa500;
  color: white !important;
}
</style>
