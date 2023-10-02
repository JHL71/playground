import styled from 'styled-components';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import { useState } from 'react';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SlideContainer = styled.div`
  width: 600px;
  height: 400px;
  overflow: hidden;
`

const SlideWrap = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  transition-property: transform;
  transform: translate3d(${props => (props.$state - 1) * -600}px, 0, 0);
  transition: all 1s ease-out;
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
  background-color: ${props => props.$num === props.$state ? "blue" : "white"};
`

const Img = styled.img`
  width: 600px;
`

const Slide = () => {
  const [select, setSelect] = useState(1);

  const onClick = ({ target: { name } }) => {
    if (name === 'left') {
      setSelect(prev => prev !== 1 ? prev - 1 : 6);
    }
    if (name === 'right') {
      setSelect(prev => prev !== 6 ? prev + 1 : 1);
    }
  }

  return (
    <Wrap>
      <SlideContainer>
        <SlideWrap $state={select}>
          <Img src={`${img6}`} alt="img6"/>
          <Img src={`${img1}`} alt="img1"/>
          <Img src={`${img2}`} alt="img2"/>
          <Img src={`${img3}`} alt="img3"/>
          <Img src={`${img4}`} alt="img4"/>
          <Img src={`${img5}`} alt="img5"/>
          <Img src={`${img6}`} alt="img6"/>
          <Img src={`${img1}`} alt="img1"/>
        </SlideWrap>
      </SlideContainer>
      <button name='left' onClick={onClick}>◀</button>
      <button name='right' onClick={onClick}>▶</button>
      <PositionBar>
        <Circle $num={1} $state={select}></Circle>
        <Circle $num={2} $state={select}></Circle>
        <Circle $num={3} $state={select}></Circle>
        <Circle $num={4} $state={select}></Circle>
        <Circle $num={5} $state={select}></Circle>
        <Circle $num={6} $state={select}></Circle>
      </PositionBar>
    </Wrap>
  )
}

export default Slide;