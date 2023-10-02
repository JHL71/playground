import { useEffect, useRef } from "react";
import styled from "styled-components";

const Triangle = () => {
  const canvasRef = useRef(null);

  const rotate = (x) => {
    if (canvasRef.current) {
      let ctx = canvasRef.current.getContext('2d');
      ctx.reset();
      ctx.beginPath();
      ctx.strokeStyle = '#000000';
      ctx.fillStyle = '#0090aa';
      ctx.moveTo(400 + 100 * Math.sin(Math.PI * 2 / 360 * x), 200 - 100 * Math.cos(Math.PI * 2 / 360 * x));
      ctx.lineTo(400 + 100 * Math.sin(Math.PI * 2 / 360 * (x + 120)), 200 - 100 * Math.cos(Math.PI * 2 / 360 * (x + 120)));
      ctx.lineTo(400 + 100 * Math.sin(Math.PI * 2 / 360 * (x + 240)), 200 - 100 * Math.cos(Math.PI * 2 / 360 * (x + 240)));
      ctx.lineTo(400 + 100 * Math.sin(Math.PI * 2 / 360 * x), 200 - 100 * Math.cos(Math.PI * 2 / 360 * x));
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
      if (x < 120) 
        window.requestAnimationFrame(() => rotate(x + 1));
      else 
        window.requestAnimationFrame(() => rotate(0));
    }
  }
  
  useEffect(() => {
    rotate(0);
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