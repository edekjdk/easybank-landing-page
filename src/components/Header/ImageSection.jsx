import {
  StyledSection,
  ImageMobile,
  ImageDesktop,
  ImageMockups,
} from './style/ImageSection.styled';
import bgIntroMobile from '../../assets/images/bgIntroMobile.svg';
import bgIntroDesktop from '../../assets/images/bgIntroDesktop.svg';
import imageMockups from '../../assets/images/imageMockups.png';

export const ImageSection = () => {
  return (
    <StyledSection>
      <ImageMobile src={bgIntroMobile} alt='header image mobile' />
      <ImageDesktop src={bgIntroDesktop} alt='header image desktop' />
      <ImageMockups src={imageMockups} alt='imageMockups' />
    </StyledSection>
  );
};
