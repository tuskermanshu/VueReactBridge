import { createApp, defineAsyncComponent } from "vue";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App.vue";

const remoteVueBtn = defineAsyncComponent(
  () => import("remoteVueComponents/Button")
);
const app = createApp(App);

Object.defineProperty(window, "React", {
  value: React,
  writable: false,
  configurable: false,
});
Object.defineProperty(window, "ReactDOM", {
  value: ReactDOM,
  writable: false,
  configurable: false,
});

app.component("remote-vue-btn", remoteVueBtn);

app.mount("#app");
