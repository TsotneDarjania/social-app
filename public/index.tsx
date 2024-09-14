import { render } from "solid-js/web";
import "./global.css";
import { AppProvider } from "./store/AppProvider";
import { createSignal } from "solid-js";
import { CustomWindow } from "./types";
import Forms from "./components/forms";
import Main from "./components/global/main";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);
  const customWindow = window as unknown as CustomWindow;

  const authCheck = () => {
    if (customWindow.authenticated === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  authCheck();

  return (
    <div class="app">
      <AppProvider>
        {isAuthenticated() ? (
          <Main />
        ) : (
          <div class="unAuthorized">
            <Forms />
          </div>
        )}
      </AppProvider>
    </div>
  );
};

render(() => <App />, document.getElementById("root")!);
