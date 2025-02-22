import styled from "styled-components";
import Home from "./components/Home";
import "./index.css";

const StyledApp = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <StyledApp className="App">
      <Home />
    </StyledApp>
  );
}

export default App;
