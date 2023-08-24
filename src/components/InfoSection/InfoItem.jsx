import { StyledArticle } from './style/InfoItem.styled';

export const InfoItem = ({ image, title, text }) => {
  return (
    <StyledArticle>
      <img src={image} alt='image' />
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledArticle>
  );
};
