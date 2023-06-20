
import { useEffect, useRef } from "react"
import styled from "styled-components"

const Circle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let draw = canvasRef.current.getContext('2d');
    let x = 0.1;
    draw.reset();
    while (x < 2.1) {
      draw.beginPath();
      draw.lineTo(400 + 100 * Math.cos(Math.PI * (x - 0.1)), 200 + 100 * Math.sin(Math.PI * (x - 0.1)));
      draw.strokeStyle = `rgb(${Math.floor(255 - 255 * Math.min(x, 1))}, ${Math.floor(255 - 255 * Math.abs(1 - x))}, ${Math.floor(0 + 127.5 * x)})`;
      draw.fillStyle = `rgb(${Math.floor(255 - 255 * Math.min(x, 1))}, ${Math.floor(255 - 255 * Math.abs(1 - x))}, ${Math.floor(0 + 127.5 * x)})`;
      draw.arc(400, 200, 100, (x-0.1) * Math.PI, x * Math.PI, false);
      draw.lineTo(400, 200);
      draw.stroke();
      draw.closePath();
      draw.fill();
      x += 0.1;
    }
    
  })
  return (
    <>
      <Canvas ref={canvasRef} width={800} height={400}></Canvas>
    </>
  )
}

const Canvas = styled.canvas`
  background-color: #eeeeee;
  border: solid black 1px;
`

export default Circle;