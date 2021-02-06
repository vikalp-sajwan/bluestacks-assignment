import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import styled from "styled-components";

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
