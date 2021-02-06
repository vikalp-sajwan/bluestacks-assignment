import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import styled from "styled-components";

// setup mock service worker to emulate backend API
const { worker } = require("./mocks/browser");
worker.start();

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <MainContent />
    </Wrapper>
  );
}

export default App;
