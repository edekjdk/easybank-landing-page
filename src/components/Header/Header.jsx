import { ImageSection } from './ImageSection';
import { StyledHeader, TextSection } from './style/Header.styled';
import { Button } from '../Utils/Button';

export const Header = () => {
  return (
    <StyledHeader>
      <ImageSection />
      <TextSection>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button></Button>
      </TextSection>
    </StyledHeader>
  );
};
