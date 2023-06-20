import { useEffect, useRef } from "react";
import styled from "styled-components";

const Triangle = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');
    ctx.reset();
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#0090aa';
    ctx.moveTo(400, 100);
    ctx.lineTo(400 + 200 / Math.sqrt(3), 300);
    ctx.lineTo(400 - 200 / Math.sqrt(3), 300);
    ctx.lineTo(400, 100);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  })

  return (
    <>
      <Canvas ref={canvasRef} width='800' height='400'></Canvas>
    </>
  )

}

const Canvas = styled.canvas`
  background-color: #eeeeee;
  border: solid black 1px;
`


export default Triangle;