import { useState } from 'react';
import { StyledNav } from './style/StyledNav.styled';
import { Logo } from '../Utils/Logo';
import { Button } from '../Utils/Button';
import { BurgerButton } from './BurgerButton';

export const Nav = () => {
  const [hide, setHide] = useState(true);

  const getData = (props) => {
    setHide(props);
  };

  return (
    <StyledNav test={hide.toString()}>
      <Logo type={'dark'}></Logo>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <Button></Button>
      <BurgerButton onToggle={getData}></BurgerButton>
    </StyledNav>
  );
};
