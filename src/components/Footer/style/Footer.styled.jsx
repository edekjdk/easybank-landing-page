import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: hsl(233, 26%, 24%);
  color: white;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 3rem 12rem;
    justify-content: space-between;
  }

  ul {
  }

  h5 {
    color: hsl(233, 8%, 62%);
  }

  button {
    margin: 1.5rem 0;
  }
`;

export const SocialsLinksUl = styled.ul`
  display: flex;
  gap: 0.6rem;
  margin: 1.5rem 0;
`;

export const NavigationLinksUl = styled.ul`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }
`;
