import { render } from "solid-js/web";
import "./global.css";
import { Header } from "./components/global/header";
import { AppProvider } from "./store/AppProvider";
import Body from "./components/global/body";
import { createSignal } from "solid-js";
import { CustomWindow } from "./types";
import Forms from "./components/forms";

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
          <>
            <Header />
            <Body />
          </>
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
