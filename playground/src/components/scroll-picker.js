import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ScrollPicker = () => {
  const pickRef = useRef(null);
  const optionRef = useRef(null);
  let timeoutId = 0;
  let cp = 300;
  const [cn, setCn] = useState(5);
  const pickNum = (top) => {
    console.log(top, cp);
    let down = optionRef.current.children[0];
    let up = optionRef.current.children[8]; 
    if (top - cp > 100) {
      optionRef.current.appendChild(down);
    } else if (top < cp) {
      optionRef.current.insertBefore(up, optionRef.current.children[0]);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setCn(+optionRef.current.children[4].id);
      pickRef.current.scrollTop = 300;
    }, 200);
  }

  useEffect(() => {
    pickRef.current.scrollTop = 300;
  }, [])

  return (
    <>
      <Back>
        <Wrap>
          <OptionWrap ref={pickRef} onScroll={(e) => pickNum(e.target.scrollTop)}>
            <div ref={optionRef}>
              <Option id={1} check={cn}>1</Option>
              <Option id={2} check={cn}>2</Option>
              <Option id={3} check={cn}>3</Option>
              <Option id={4} check={cn}>4</Option>
              <Option id={5} check={cn}>5</Option>
              <Option id={6} check={cn}>6</Option>
              <Option id={7} check={cn}>7</Option>
              <Option id={8} check={cn}>8</Option>
              <Option id={9} check={cn}>9</Option>
            </div>
          </OptionWrap>
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
  width: 600px;
  height: 400px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OptionWrap = styled.div`
  width: 200px;
  height: 300px;
  border: solid black 1px;
  margin: auto;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Option = styled.div`
  width: 200px;
  height: 100px;
  background-color: wheat;
  border-top: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    if (props.id === props.check) {
      return 'red'
    } else {
      return 'black'
    }
  }};
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