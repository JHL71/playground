import { useEffect, useState } from "react";
import styled from "styled-components";
import { Circle, ClickAim, Draw, Triangle } from "../shape";

const Canvas = () => {
  const [shape, setShape] = useState('');

  const drawShape = (str) => {
    switch (str) {
      case 'circle':
        return (
          <Circle />
        )
      case 'triangle':
        return (
          <Triangle />
        )
      case 'draw':
        return (
          <Draw />
        )
      case 'clickAim':
        return (
          <ClickAim />
        )
      default:
        break;
    }
  }

  useEffect(() => {

  });

  return (
    <>
      <Back>
        <Select>
          <List onClick={() => setShape('circle')}>Circle</List>
          <List onClick={() => setShape('triangle')}>Triangle</List>
          <List onClick={() => setShape('draw')}>Draw</List>
          <List onClick={() => setShape('clickAim')}>ClickAim</List>
        </Select>
        <Show>
          {drawShape(shape)}
        </Show>
      </Back>
    </>
  )
}

const Back = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

const Select = styled.div`
  width: 200px;
  height: 100vh;
  background-color: wheat;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;

`

const List = styled.div`
  width: 150px;
  height: 50px;
  margin: 20px;
  border-radius: 10px;
  background-color: #0090aa;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #ff7f66;
    color: white;
  }
`

const Show = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`


export default Canvas;