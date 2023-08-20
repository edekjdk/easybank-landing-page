import styled from 'styled-components';

export const Button = styled.button`
  min-width: 2rem;
  min-height: 2rem;
  border: none;
  background: transparent;

  div {
    min-height: 2px;
    min-width: 2rem;
    background-color: black;
    margin: 5px 0;
    transition: ease-in-out 0.3s;
    transform-origin: center center;
  }

  div:first-child {
    transform: ${(props) =>
      props.hide === 'true'
        ? 'translateY(7px) rotate(45deg)'
        : 'translateY(0) rotate(0)'};
  }

  div:nth-child(2) {
    /* opacity: ${(props) => (props.hide === 'true' ? 0 : '100%')}; */
    transform: ${(props) =>
      props.hide === 'true' ? ' rotate(45deg)' : ' rotate(0)'};
  }

  div:last-child {
    transform: ${(props) =>
      props.hide === 'true'
        ? 'translateY(-7px) rotate(-45deg)'
        : 'translateY(0) rotate(0)'};
  }
`;
