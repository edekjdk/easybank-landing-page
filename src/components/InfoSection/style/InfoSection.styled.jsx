import styled from 'styled-components';

export const StyledMainSection = styled.section`
  padding: 3rem 1.4rem;
  background-color: hsl(0, 0%, 98%);
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: hsl(233, 26%, 24%);
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p {
    color: hsl(233, 8%, 62%);
    text-align: center;
    max-width: 370px;
    margin-bottom: 3rem;
  }
`;
