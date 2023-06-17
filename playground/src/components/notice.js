import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Notice = () => {
  const [dis, setDis] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDis(false);
    }, 2000);
  });

  return (
    <>
     <Back>
      <Contents dis={dis} onClick={() => setDis(!dis)}>
        notification alert
      </Contents>
     </Back>
    </>
  )
}

const Back = styled.div`
  width: 100%;
  height: 100%;
`

const appear = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
` 

const Contents = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 250px;
  height: 40px;
  background-color: #dc56dc;
  animation: ${appear} 1s linear;
  opacity: ${(props) => props.dis ? 1 : 0};
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 10px;
`


export default Notice;