import { useRef, useState } from "react";
import styled from "styled-components";

const Draw = () => {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState('draw');
  const [c, setC] = useState('#000000');
  let x = false;
  
  const selMode = (e, mode) => {
    switch (mode) {
      case 'draw':
        draw(e);
        break;
      case 'reset':
        reset();
        break;
      case 'chase':
        chase(e);
        break;
      default:
        break;
    }
  }

  const draw = (e) => {
    if (x) {
      let ctx = canvasRef.current.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = c;
      ctx.strokeStyle = c;
      ctx.arc(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 10, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.fill();
    }
  }
  
  const reset = () => {
    let ctx = canvasRef.current.getContext('2d');
    ctx.reset();
  }

  const chase = (e) => {
    let ctx = canvasRef.current.getContext('2d');
    setTimeout(() => {
      ctx.reset();
      ctx.fillStyle = c;
      ctx.arc(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 10, 0, 2 * Math.PI, true);
      ctx.fill();
    }, 300);
  }

  return (
    <>
      <Back>
        <ColorWrap>
          <ColorButton onClick={() => setC('red')} val={'red'}></ColorButton>
          <ColorButton onClick={() => setC('orange')} val={'orange'}></ColorButton>
          <ColorButton onClick={() => setC('yellow')} val={'yellow'}></ColorButton>
          <ColorButton onClick={() => setC('green')} val={'green'}></ColorButton>
          <ColorButton onClick={() => setC('blue')} val={'blue'}></ColorButton>
          <ColorButton onClick={() => setC('indigo')} val={'indigo'}></ColorButton>
          <ColorButton onClick={() => setC('purple')} val={'purple'}></ColorButton>
        </ColorWrap>
        <ButtonWrap>
          <Button onClick={() => setMode('draw')} v={'draw'} sl={mode}>draw</Button>
          <Button onClick={() => setMode('reset')} v={'reset'} sl={mode}>reset</Button>
          <Button onClick={() => setMode('chase')} v={'chase'} sl={mode}>chase</Button>
        </ButtonWrap>
        <Canvas ref={canvasRef} width={800} height={400} 
        onMouseDown={() => x = true}
        onMouseMove={e => selMode(e, mode)}
        onMouseUp={() => x = false}
        ></Canvas>
      </Back>
    </>
  )
}

const Back = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ColorWrap = styled.div`
  width: 800px;
  height: 50px;
  background-color: skyblue;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColorButton = styled.div`
  width: 80px;
  height: 50px;
  background-color: ${(props) => props.val};
  :hover {
    cursor: pointer;
  }
`

const ButtonWrap = styled.div`
  width: 800px;
  height: 200px;
  background-color: #f0a0f0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.div`
  width: 160px;
  height: 80px;
  background-color: #900090;
  color: ${(props) => props.v === props.sl ? '#ffff00' : 'white'};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const Canvas = styled.canvas`
  background-color: #eeeeee;
  border: solid black 1px;
`


export default Draw;