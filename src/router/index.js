import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "",
  //   component: () => import("../components/Login.vue"),
  // },
  {
    path: "/versality",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/metodos-ativos-de-aprendizagem",
    name: "MetodosAtivos",
    component: () => import("../components/MetodosAtivos.vue"),
  },
  {
    path: "/planos-de-aula",
    name: "PlanosAula",
    component: () => import("../components/PlanosAula.vue"),
  },
  {
    path: "/planos-de-ensino",
    name: "PlanosEnsino",
    component: () => import("../components/PlanosEnsino.vue"),
  },
  {
    path: "/termometro-de-sala",
    name: "Termometro",
    component: () => import("../components/Termometro.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },

  {
    path: "/disciplinas",
    name: "Disciplinas",
    component: () => import("../components/Disciplinas.vue"),
  },

  {
    path: "/lista-planos-de-aula",
    name: "ListaPlanodeAula",
    component: () => import("../components/ListaPlanodeAula"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
