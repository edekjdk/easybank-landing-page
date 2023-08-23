import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 1.2rem 1.4rem;
  @media screen and (min-width: 1440px) {
    padding: 1.2rem 12rem;
  }

  button {
    &:first-of-type {
      display: none;

      @media screen and (min-width: 1440px) {
        display: block;
      }
    }

    &:last-of-type {
      display: block;
      @media screen and (min-width: 1440px) {
        display: none;
      }
    }
  }

  ul {
    color: hsl(233, 8%, 62%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 0;
    position: absolute;
    top: 90px;
    left: 50%;
    z-index: 1;
    background-color: #fff;
    /* transform: translateX(-50%); */
    transform: ${(props) =>
      props.test === 'true' ? 'translateX(+100%)' : 'translateX(-50%)'};
    transition: ease-in-out 0.3s;
    min-width: 85%;
    border-radius: 10px;

    @media screen and (min-width: 1440px) {
      position: unset;
      transform: translate(0);
      flex-direction: row;
      min-width: unset;
      padding: 0;
      gap: 3rem;

      li {
        transition: 0.3s;
        position: relative;
      }

      li::after {
        content: '';
        background-color: hsl(136, 65%, 51%);
        height: 0.2rem;
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 0%;
        transition: ease-in-out 0.3s;
      }

      li:hover::after {
        width: 100%;
      }

      li:hover {
        color: hsl(233, 26%, 24%);
        cursor: pointer;
      }
    }
  }
`;
