import { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [check, setCheck] = useState(true);

  return (
    <>
     <Back>
      <ButtonWrap check={check} onClick={() => setCheck(!check)}>
        <Circle check={check}></Circle>
      </ButtonWrap>
     </Back>
    </>
  )
}

const Back = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrap = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.check ? 'wheat' : 'black'};
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
  }
`

const Circle = styled.div`
  position: relative;
  left: ${(props) => props.check ? 0 : 50}px;
  width : 50px;
  height: 50px;
  border-radius: 25px;
  background-color: blue;
  transition: all 0.5s ease;
`


export default Toggle;