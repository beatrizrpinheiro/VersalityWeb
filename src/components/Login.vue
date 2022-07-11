<template>
  <div class="inicio">
    <v-app id="inspire" class="fundo">
      <v-content>
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
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#FFA500" to="/versality" class="labelButton"
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
export default {
  name: "Login",
  props: {
    source: String,
  },
};
</script>

<style>
.labelButton {
  background-color: #ffa500;
  color: white !important;
}
</style>
