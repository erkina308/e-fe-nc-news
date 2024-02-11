import styled from "styled-components";

const ArticleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  max-width: 100%;
  height: auto;
  & :hover {
    border: 1px solid #777;
  }
`;

export default ArticleDiv;
