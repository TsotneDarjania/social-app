import setupEventListeners from "./modules/eventHandlers.js";
import { authCheck } from "./modules/auth.js";

window.addEventListener("DOMContentLoaded", () => {
  authCheck();
  setupEventListeners();
});
