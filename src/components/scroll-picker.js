import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ScrollPicker = () => {
  const pickRef = useRef(null);
  const optionRef = useRef(null);
  let timeoutId = 0;
  let cp = 500;
  const [cn, setCn] = useState(5);
  const pickNum = (top) => {
    let down = optionRef.current.children[0];
    let up = optionRef.current.children[11]; 
    if (cp > 500) {
      optionRef.current.appendChild(down);
    } else if (cp < 400) {
      optionRef.current.insertBefore(up, optionRef.current.children[0]);
    }
    cp = top;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      let child;
      child = Math.round(top/100) + 1;
      setCn(+optionRef.current.children[child].id);
    }, 200);
  }

  useEffect(() => {
    pickRef.current.scrollTop = 500;
  }, [])

  return (
    <>
      <Back>
        <Wrap>
          <OptionWrap ref={pickRef} onScroll={(e) => pickNum(e.target.scrollTop)}>
            <div ref={optionRef}>
              <Option id={7} check={cn}>7</Option>
              <Option id={8} check={cn}>8</Option>
              <Option id={9} check={cn}>9</Option>
              <Option id={10} check={cn}>10</Option>
              <Option id={11} check={cn}>11</Option>
              <Option id={12} check={cn}>12</Option>
              <Option id={1} check={cn}>1</Option>
              <Option id={2} check={cn}>2</Option>
              <Option id={3} check={cn}>3</Option>
              <Option id={4} check={cn}>4</Option>
              <Option id={5} check={cn}>5</Option>
              <Option id={6} check={cn}>6</Option>
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
  background-color: ${(props) => {
    if (props.id === props.check) {
      return '#3f3f3f'
    } else {
      return 'wheat'
    }
  }};
  border-top: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    if (props.id === props.check) {
      return '#eeeeee'
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