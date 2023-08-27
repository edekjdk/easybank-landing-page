import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';

export const Logo = ({ type }) => {
  if (type === 'dark') return <img src={logo} alt='website-logo' />;
  if (type === 'light') return <img src={logoWhite} alt='website-logo' />;
};
