import styled from "styled-components";

const Nav = styled.nav`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 16px;
  & ul {
    padding: 0;
    margin: 0;
  }
`;

export default Nav;
