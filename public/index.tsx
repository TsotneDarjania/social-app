import { render } from "solid-js/web";
import "./global.css";
import { Header } from "./components/global/header";
import { AppProvider } from "./store/AppProvider";

function App() {
  return (
    <div>
      <AppProvider>
        <Header />
      </AppProvider>
    </div>
  );
}

render(() => <App />, document.getElementById("root")!);
