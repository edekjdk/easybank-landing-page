export const InfoItem = ({ image, title, text }) => {
  return (
    <article>
      <img src={image} alt='image' />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
