import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      &:last-child {
        border: none;
      }
    }
  }
`;
