import styled from 'styled-components';

export const StyledButton = styled.button`
  color: white;
  border: none;
  font-weight: 700;
  min-height: 2.5rem;
  min-width: 9rem;
  border-radius: 25px;
  background: rgb(49, 211, 92);
  background: linear-gradient(
    135deg,
    rgba(49, 211, 92, 1) 0%,
    rgba(43, 183, 218, 1) 100%
  );
  padding: 0.8rem 2rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    /* background: rgb(128, 207, 149); */
    /* background: linear-gradient(135deg, #81ce96 0%, #78bdce 100%); */
    opacity: 0.6;
  }
`;
