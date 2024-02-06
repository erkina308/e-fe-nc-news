import styled from "styled-components";

const NavElements = styled.div`
  & ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    & li {
      & :not(:last-child) {
        margin-right: 60px;
      }
    }
    & a {
      font-size: 16px;
      font-weight: 400;
      color: black;
      text-decoration: none;
      & .active {
        color: #574c4c;
        font-weight: 500;
        position: relative;
        & ::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #574c4c;
        }
      }
    }
  }
`;

export default NavElements;
