import { styled } from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 2rem 0;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }

  h3 {
    color: hsl(233, 26%, 24%);
    font-weight: 500;
    text-align: center;
    margin: 0.5rem 0;
  }

  p {
    color: hsl(233, 8%, 62%);
    text-align: center;
    max-width: 370px;

    @media screen and (min-width: 1440px) {
      text-align: left;
      font-size: 1rem;
    }
  }
`;
