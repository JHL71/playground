import styled from 'styled-components';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SlideWrap = styled.div`
  width: 600px;
  height: 400px;
  overflow: hidden;
  display: flex;
`

const PositionBar = styled.div`
  width: 200px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: white;
`

const Slide = () => {


  return (
    <Wrap>
      <SlideWrap>
        <img src={`${img1}`} alt="img1"/>
        <img src={`${img2}`} alt="img1"/>
        <img src={`${img3}`} alt="img1"/>
        <img src={`${img4}`} alt="img1"/>
        <img src={`${img5}`} alt="img1"/>
        <img src={`${img6}`} alt="img1"/>
        <img src={`${img7}`} alt="img1"/>
      </SlideWrap>
      <PositionBar>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </PositionBar>
    </Wrap>
  )
}

export default Slide;