import { useRef } from "react";
import styled from "styled-components";

const Mouse = () => {
  const canvasRef = useRef(null);
  let x = false;
  
  const draw = (e) => {
    if (x) {
      let ctx = canvasRef.current.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = '#000000';
      ctx.arc(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 10, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.fill();
    }
  }

  return (
    <>
      <Canvas ref={canvasRef} width={800} height={400} 
      onMouseDown={() => x = true}
      onMouseMove={e => draw(e)}
      onMouseUp={() => x = false}
      ></Canvas>
    </>
  )
}

const Canvas = styled.canvas`
  background-color: #eeeeee;
  border: solid black 1px;
`


export default Mouse;