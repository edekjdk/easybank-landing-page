import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 1440px) {
    margin: 0;
    max-width: 50%;
    float: right;
  }
`;

export const ImageMobile = styled.img`
  /* min-width: 100%; */
  width: 100%;
  max-width: 650px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ImageDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 1100px;
    clip-path: inset(25% 0 0 0);
    top: -224px;
    right: -280px;
    position: absolute;
    width: 1100px;
  }
  @media screen and (min-width: 1440px) {
    top: -245px;
    width: 1200px;
  }
  @media screen and (min-width: 1900px) {
    top: -284px;
    right: -350px;
    width: 1400px;
  }
`;

export const ImageMockups = styled.img`
  position: absolute;
  width: 100%;
  top: -21.7%;
  clip-path: inset(20% 0 0 0);

  @media screen and (min-width: 1440px) {
    /* display: none; */
    top: -197px;
    width: 800px;
    /* max-width: 650px; */
    right: -120px;
  }
  @media screen and (min-width: 1900px) {
    top: -212px;
    width: 870px;
    right: -153px;
  }
`;
