import imageCurrency from '../../assets/images/imageCurrency.jpg';
import imageRestaurant from '../../assets/images/imageRestaurant.jpg';
import imagePlane from '../../assets/images/imagePlane.jpg';
import imageConfetti from '../../assets/images/imageConfetti.jpg';
import { ArticleItem } from './ArticleItem';
import {
  StyledMainSection,
  ItemsSection,
} from './style/ArticlesSection.styled';

const data = [
  {
    image: imageCurrency,
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    text: '  The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    image: imageRestaurant,
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: '  Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    image: imagePlane,
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    text: '  We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    image: imageConfetti,
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    text: '  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
];

export const ArticlesSection = () => {
  return (
    <StyledMainSection>
      <h2>Latest Articles</h2>
      <ItemsSection>
        {data.map((article, index) => (
          <ArticleItem
            key={index}
            image={article.image}
            author={article.author}
            title={article.title}
            text={article.text}
          />
        ))}
      </ItemsSection>
    </StyledMainSection>
  );
};
