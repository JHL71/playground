import { useEffect, useRef } from "react";
import styled from "styled-components";

const ClickAim = () => {
  const cvRef = useRef(null);
  let start = false;
  let tgtList = [];
  let id = 0;
  let size = 1;

  const createTgt = () => {
    if (cvRef.current) {
      const ctx = cvRef.current.getContext('2d');
      const [x, y, idx] = [Math.round(Math.random() * 700) + 50, Math.round(Math.random() * 300) + 50, size];
      if (size % 10 === 1)
        tgtList.push([x, y, idx]);
      tgtList.forEach((pos, idx) => {
        let len = (size - pos[2]);
        if (len > 50) {
          len = 100 - size + pos[2];
        }
        if (len < 0) {
          len = 0;
          tgtList.shift();
        }
        if (idx === 0) ctx.reset();
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], len, 0, Math.PI * 2, true);
        ctx.fillStyle = '#9f409f';
        ctx.fill();
        ctx.closePath();
      });
      size++;
      id = setTimeout(() => {
        window.requestAnimationFrame(() => createTgt());
      }, 50);
    }
  }

  const clearBrd = () => {
    start = false;
    size = 1;
    if (cvRef.current) {
      const ctx = cvRef.current.getContext('2d');
      ctx.reset();
      clearTimeout(id);
      tgtList = [];
    }
  }

  const clickTgt = (e) => {
    let check = true;
    if (start) {
      const [x, y] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
      console.log(x,y);
      let cp = tgtList[tgtList.length - 1][2];
      tgtList = tgtList.filter(([tx, ty, idx]) => {
        if (check) {
          let len = cp - idx;
          if (len > 50) len = 100 - cp + idx;
          let isIn = (Math.sqrt(Math.pow(tx - x, 2) + Math.pow(ty - y, 2)) < len);
          if (isIn) check = false;
          return !(isIn);
        } else {
          return true;
        }
      })
    }
  }

  useEffect(() => {
  }, []);

  return (
    <>
    <Back>
      <ButtonWrap>
        <Button onClick={() => {
          start = true;
          createTgt();
          }}>start</Button>
        <Button onClick={() => {
          start = false;
          clearTimeout(id);
          }}>stop</Button>
        <Button onClick={() => clearBrd()}>reset</Button>
      </ButtonWrap>
      <Canvas ref={cvRef} width={800} height={400} onClick={(e) => clickTgt(e)}>

      </Canvas>
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

const ButtonWrap = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: orange;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    color: white;
  }
`

const Canvas = styled.canvas`
  background-color: #eeeeee;
  border: solid black 1px;
  cursor: crosshair;
`

export default ClickAim;