import { useState } from 'react';
import { Button } from './style/Button.styled';

export const BurgerButton = (props) => {
  const [hide, setHide] = useState(false);

  const toggleMobileMenuHandler = () => {
    setHide((prev) => !prev);
    props.onToggle(hide);
  };

  return (
    <Button hide={hide.toString()} onClick={toggleMobileMenuHandler}>
      <div></div>
      <div></div>
      <div></div>
    </Button>
  );
};
