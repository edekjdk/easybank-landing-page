import { StyledArticle } from './style/ArticleItem.styled';

export const ArticleItem = ({ image, author, title, text }) => {
  return (
    <StyledArticle>
      <img src={image} alt='image' />
      <h6>{author}</h6>
      <h4>{title}</h4>
      <p>{text}</p>
    </StyledArticle>
  );
};
