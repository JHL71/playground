import styled from 'styled-components';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import { useState } from 'react';
import { useRef } from 'react';

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
  z-index: 1;
  width: 600px;
  height: 400px;
  display: flex;
  transition-property: transform;
  transform: translate3d(${props => props.$state * -600}px, 0, 0);
  transition: transform 1s ease-out;
`

const PositionBar = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
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

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

const Slide = () => {
  const [select, setSelect] = useState(1);
  const slideRef = useRef(null);

  const onClick = ({ target: { name } }) => {
    if (name === 'left') {
      if (select === 1) {
        let original = slideRef.current.syle;
        slideRef.current.setAttribute('style', `transform: translate3d(-4200px, 0, 0); transition: 0s`);
        setTimeout(() => {
          slideRef.current.setAttribute('style', original);
        });
      }
      setSelect(prev => prev !== 1 ? prev - 1 : 6);
    }
    if (name === 'right') {
      if (select === 6) {
        let original = slideRef.current.syle;
        slideRef.current.setAttribute('style', `transform: translate3d(0, 0, 0); transition: 0s`);
        setTimeout(() => {
          slideRef.current.setAttribute('style', original);
        });
      }
      setSelect(prev => prev !== 6 ? prev + 1 : 1);
    }
  }

  return (
    <Wrap>
      <Button name='left' onClick={onClick}>◀</Button>
      <SlideContainer>
        <SlideWrap $state={select} ref={slideRef}>
          <Img $num={0} $state={select} src={`${img6}`} alt="img6"/>
          <Img $num={1} $state={select} src={`${img1}`} alt="img1"/>
          <Img $num={2} $state={select} src={`${img2}`} alt="img2"/>
          <Img $num={3} $state={select} src={`${img3}`} alt="img3"/>
          <Img $num={4} $state={select} src={`${img4}`} alt="img4"/>
          <Img $num={5} $state={select} src={`${img5}`} alt="img5"/>
          <Img $num={6} $state={select} src={`${img6}`} alt="img6"/>
          <Img $num={7} $state={select} src={`${img1}`} alt="img1"/>
        </SlideWrap>
      </SlideContainer>
      <Button name='right' onClick={onClick}>▶</Button>
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