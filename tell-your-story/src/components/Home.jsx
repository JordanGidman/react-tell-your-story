import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHome = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <StyledHome className="Home">
      <Navbar />
      <main></main>
    </StyledHome>
  );
}

export default Home;
