
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
      draw.lineTo(150 + 30 * Math.cos(Math.PI * (x - 0.1)), 75 + 30 * Math.sin(Math.PI * (x - 0.1)));
      draw.strokeStyle = `rgb(${Math.floor(0 + 120 * x)}, ${Math.floor(255 - 120 * x)}, 125)`;
      draw.fillStyle = `rgb(${Math.floor(0 + 120 * x)}, ${Math.floor(255 - 120 * x)}, 125)`;
      draw.arc(150, 75, 30, (x-0.1) * Math.PI, x * Math.PI, false);
      draw.lineTo(150, 75);
      draw.stroke();
      draw.closePath();
      draw.fill();
      x += 0.1;
    }
    
  })
  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
    </>
  )
}

const Canvas = styled.canvas`
  background-color: yellowgreen;
`

export default Circle;