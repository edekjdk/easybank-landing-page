import { styled } from 'styled-components';

export const StyledMainSection = styled.section`
  padding: 3rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    padding: 3rem 12rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: hsl(233, 26%, 24%);
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const ItemsSection = styled.section`
  width: 100%;
  max-width: 500px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    display: flex;
    max-width: 100%;
    gap: 1rem;
  }
`;
