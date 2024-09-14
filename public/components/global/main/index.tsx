import useSocket from "../../../utils/socket";
import Body from "../body";
import { Header } from "../header";

const Main = () => {
  useSocket();

  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default Main;
