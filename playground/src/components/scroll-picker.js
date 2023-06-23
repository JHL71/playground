import { useRef } from "react";
import styled from "styled-components";

const ScrollPicker = () => {
  const pickRef = useRef(null);

  return (
    <>
      <Back>
        <Wrap>
          <Option useRef={pickRef}>

          </Option>
          <SelectWrap></SelectWrap>
        </Wrap>
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

const Wrap = styled.div`
  width: 400px;
  height: 400px;
  background-color: skyblue;
`

const Option = styled.div`
  border: solid black 1px;
`

const SelectWrap = styled.div`
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  box-sizing: border-box;
  overflow-y: scroll;
  z-index: 1;
  opacity: 0.3;
`

export default ScrollPicker;