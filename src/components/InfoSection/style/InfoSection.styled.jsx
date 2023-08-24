import styled from 'styled-components';

export const StyledMainSection = styled.section`
  padding: 3rem 1.4rem;
  background-color: hsl(0, 0%, 98%);

  @media screen and (min-width: 1440px) {
    padding: 7rem 12rem;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }

  h2 {
    color: hsl(233, 26%, 24%);
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 1440px) {
      font-size: 2.5rem;
    }
  }

  p {
    color: hsl(233, 8%, 62%);
    text-align: center;
    max-width: 370px;
    margin-bottom: 3rem;

    @media screen and (min-width: 1440px) {
      text-align: left;
      font-size: 1.1rem;
      max-width: 640px;
    }
  }
`;

export const ItemsStyledSection = styled.section`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 4rem;
  }
`;
