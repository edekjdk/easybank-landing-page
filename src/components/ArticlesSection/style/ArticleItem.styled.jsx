import { styled } from 'styled-components';

export const StyledArticle = styled.article`
  margin-bottom: 4rem;
  /* padding: 0 1rem; */

  img {
    width: 100%;
    max-width: 500px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  h6 {
    margin: 0.5rem 0;
    font-size: 0.8rem;
    padding: 0 2rem;
    /* font-weight: 500; */
    color: hsl(233, 8%, 62%);
  }

  h4 {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: hsl(233, 26%, 24%);
    margin-bottom: 0.5rem;
  }

  p {
    padding: 0 2rem;
    color: hsl(233, 8%, 62%);
  }
`;
