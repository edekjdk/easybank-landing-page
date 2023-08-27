import {
  StyledFooter,
  SocialsLinksUl,
  NavigationLinksUl,
} from './style/Footer.styled';
import { Logo } from '../Utils/Logo';
import { Button } from '../Utils/Button';
import iconFacebook from '../../assets/images/iconFacebook.svg';
import iconYoutube from '../../assets/images/iconYoutube.svg';
import iconTwitter from '../../assets/images/iconTwitter.svg';
import iconPinterest from '../../assets/images/iconPinterest.svg';
import iconInstagram from '../../assets/images/iconInstagram.svg';

export const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <Logo type={'light'} />
        <SocialsLinksUl>
          <li>
            <img src={iconFacebook} alt='fb' />
          </li>
          <li>
            <img src={iconYoutube} alt='yt' />
          </li>
          <li>
            <img src={iconTwitter} alt='twt' />
          </li>
          <li>
            <img src={iconPinterest} alt='pin' />
          </li>
          <li>
            <img src={iconInstagram} alt='ig' />
          </li>
        </SocialsLinksUl>
      </section>
      <NavigationLinksUl>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </NavigationLinksUl>
      <section>
        <Button />
        <h5>&copy; Easybank. All Rights Reserved</h5>
      </section>
    </StyledFooter>
  );
};
