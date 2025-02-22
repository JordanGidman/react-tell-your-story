import styled from "styled-components";

export default function Navbar() {
  const account = false;

  const StyledNav = styled.nav`
    display: flex;
    width: 100vw;
    align-items: center;
    padding: 2.4rem 4.8rem;
    box-shadow: 0 0 0.8rem 0.2rem rgb(0, 0, 0, 0.2);
  `;

  const StyledList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    font-size: 1.6rem;
  `;

  return (
    <div className="nav-container">
      <StyledNav className="nav">
        <StyledList className="nav-list">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">Browse</li>
          <li className="nav-list-item">Write</li>
          {account ? (
            <li className="nav-list-item">Account</li>
          ) : (
            <buttton className="nav-list-item nav-btn">
              Sign in / Sign up
            </buttton>
          )}
        </StyledList>
      </StyledNav>
    </div>
  );
}
