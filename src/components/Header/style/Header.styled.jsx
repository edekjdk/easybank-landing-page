import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    padding: 0 0 0 12rem;
    height: 66vh;
  }
  @media screen and (min-width: 1900px) {
    height: 76vh;
  }
`;

export const TextSection = styled.section`
  color: hsl(233, 26%, 24%);
  padding: 0 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    max-width: 360px;
    font-weight: 500;

    @media screen and (min-width: 1440px) {
      text-align: left;
      font-size: 3.3rem;
      max-width: 480px;
      /* margin-top: 16vh; */
    }

    @media screen and (min-width: 1900px) {
      max-width: 540px;
      font-size: 4.5rem;
    }
  }

  p {
    max-width: 370px;
    text-align: center;
    margin: 1rem 0 2rem;

    @media screen and (min-width: 1440px) {
      text-align: left;
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
    align-items: flex-start;
    padding: 0;
    justify-content: center;
  }
`;
