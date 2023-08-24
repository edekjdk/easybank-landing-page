export const ArticleItem = ({ image, author, title, text }) => {
  return (
    <article>
      <img src={image} alt='' />
      <h6>{author}</h6>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};
