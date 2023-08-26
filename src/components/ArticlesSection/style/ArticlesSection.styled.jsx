import { styled } from 'styled-components';

export const StyledMainSection = styled.section`
  padding: 0 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: hsl(233, 26%, 24%);
    text-align: center;
    margin: 3rem 0;
  }
`;

export const ItemsSection = styled.section`
  width: 100%;
  max-width: 500px;
`;
