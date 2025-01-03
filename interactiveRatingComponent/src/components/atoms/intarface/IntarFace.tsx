import styled from 'styled-components'


const HeadText =  styled.h1`
  color: var(--Pure-White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Overpass;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ContentText = styled.p`
  width: 340px;
  color: var(--Light-Grey, #969FAD);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Overpass;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
const IntarFace = () => {

  return (
    <div>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#262E38"/>
          <path d="M25.0669 16.43L27.0567 20.4614C27.1691 20.6891 27.3864 20.8469 27.6377 20.8834L32.0866 21.53C32.3773 21.5722 32.6188 21.7758 32.7095 22.0552C32.8002 22.3346 32.7244 22.6413 32.514 22.8463L29.2943 25.9842C29.1122 26.1617 29.0296 26.4171 29.0721 26.667L29.8321 31.0981C29.8816 31.3876 29.7626 31.6801 29.525 31.8527C29.2874 32.0253 28.9724 32.048 28.7125 31.9114L24.7328 29.8189C24.5079 29.7009 24.2394 29.7009 24.0145 29.8189L20.0347 31.9114C19.7748 32.048 19.4598 32.0253 19.2222 31.8527C18.9846 31.6801 18.8656 31.3876 18.9152 31.0981L19.6752 26.667C19.7182 26.4167 19.635 26.1613 19.453 25.9842L16.2333 22.8463C16.0228 22.6413 15.947 22.3346 16.0377 22.0552C16.1285 21.7758 16.37 21.5722 16.6607 21.53L21.1095 20.8834C21.3609 20.8469 21.5781 20.6891 21.6905 20.4614L23.6804 16.43C23.9659 15.8567 24.7837 15.8567 25.0669 16.43Z" fill="#FC7614"/>
      </svg>
      <div>
          <HeadText>How did we do?</HeadText>
          <ContentText>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</ContentText>
      </div>
    </div>
  )
}

export default IntarFace;