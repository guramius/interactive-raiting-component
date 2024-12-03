import IntarFace from "../../atoms/intarface/IntarFace"
import Number from "../../atoms/number/Number"

import styled from 'styled-components'

const ContentDiv = styled.div`
  border-radius: 30px;
  background: var(--black-gradient, radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%));
  padding: 32px;
`;
const ComponentsMarge = () => {
  return (
    <ContentDiv>
      <IntarFace/>
      <Number/>        
    </ContentDiv>
  )
}

export default ComponentsMarge