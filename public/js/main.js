import { authCheck } from "./modules/auth.ts";
import notificationModal from "./components/afterAuth/notificationModal.ts";

window.addEventListener("DOMContentLoaded", () => {
  authCheck();
});
