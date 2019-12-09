import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//bootstrap4
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
