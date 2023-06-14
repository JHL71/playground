import { useRef, useState } from "react";
import styled from "styled-components";

const toPostfix = (str) => {
  const stack = [];
  let top = -1;
  const fomula = [];
  const postfix = [];
  const priority = {
    '+' : 1,
    '-' : 1,
    '×' : 2,
    '÷' : 2,
    '(' : 0
  }
  const regNum = /[\d.]/;
  let num = '';

  for (let i = 0; i < str.length; i++) {
    if (regNum.test(str[i])) {
      num += str[i];
    } else {
      if (num !== '') fomula.push(num);
      fomula.push(str[i]);
      num = '';
    }
  }
  if (num !== '') fomula.push(num);

  let check = 0;
  for (let i = 0; i < fomula.length; i++) {
    switch (fomula[i]) {
      case '(':
        check++;
        break;
      case ')':
        check--;
        break;
      default:
        break;
    }
    if (check < 0) return 'Invalid';
  }
  if (check !== 0) return 'Invalid';

  for (const char of fomula) {
    if (regNum.test(char)) {
      postfix.push(char - 0);
    } else {
      if (char === ')') {
        while (stack[top] !== '(') {
          postfix.push(stack.pop());
          top--;
        }
        stack.pop();
        top--;
      } else if (char === '(') {
        stack.push(char);
        top++;
      } else {
        while (priority[stack[top]] >= priority[char] && top > -1) {
          postfix.push(stack.pop());
          top--;
        }
        stack.push(char);
        top++;
      }
    }
  }
  while (stack.length > 0) {
    postfix.push(stack.pop());
  }
  return postfix;
}

const calculate = (str) => {
  const postfix = toPostfix(str);
  if (postfix === 'Invalid') return 'Invalid Fomula'
  const stack = [];
  let num1, num2
  for (let i = 0; i < postfix.length; i++) {
    if (typeof(postfix[i]) === 'number') {
      stack.push(postfix[i]);
    } else {
      num2 = stack.pop();
      num1 = stack.pop();
      switch (postfix[i]) {
        case '+': stack.push(num1 + num2);
         break;
        case '-': stack.push(num1 - num2);
         break;
        case '×': stack.push(num1 * num2);
         break;
        case '÷': stack.push(num1 / num2);
         break;
      }
    }
  }
  return stack[0];
}


function Calculator () {
  const [fomula, setFomula] = useState('');
  const [answer, setAnswer] = useState('');
  

  return (
    <>
      <Background>
        <CalculatorWrap>
          <ScreenWrap>
            <Screen>
              <FomulaWrap>
                <Fomula> 
                  {fomula}
                </Fomula>
              </FomulaWrap>
              <AnswerWrap>
                <Answer onClick={() => {
                  setFomula(answer)
                  setAnswer('');
                }}>
                  {answer}
                </Answer>
              </AnswerWrap>
            </Screen>
          </ScreenWrap>
          <ButtonWrap>
            <LineWrap>
              <Button onClick={() => {
                if (/[-×÷+]/.test(fomula[fomula.length - 1]))
                setFomula(fomula + '(')
              }}>{'('}</Button>
              <Button onClick={() => {
                if (/\d/.test(fomula[fomula.length - 1]))
                  setFomula(fomula + ')');
              }}>{')'}</Button>
              <Button onClick={() => setFomula(fomula.slice(0, -1))}> del </Button>
              <Button onClick={() => {
                setFomula('');
                setAnswer('');
              }}> C </Button>
            </LineWrap>
            <LineWrap>
              <Button onClick={() => setFomula(fomula + '1')}> 1 </Button>
              <Button onClick={() => setFomula(fomula + '2')}> 2 </Button>
              <Button onClick={() => setFomula(fomula + '3')}> 3 </Button>
              <OpButton onClick={() => {
                if (/[^-^×^÷^+.]/.test(fomula[fomula.length - 1]))
                  setFomula(fomula + '+');
              }}> + </OpButton>
            </LineWrap>
            <LineWrap>
              <Button onClick={() => setFomula(fomula + '4')}> 4 </Button>
              <Button onClick={() => setFomula(fomula + '5')}> 5 </Button>
              <Button onClick={() => setFomula(fomula + '6')}> 6 </Button>
              <OpButton onClick={() => {
                if (/[^-^×^÷^+.]/.test(fomula[fomula.length - 1]))
                  setFomula(fomula + '-');
              }}> - </OpButton>
            </LineWrap>
            <LineWrap>
              <Button onClick={() => setFomula(fomula + '7')}> 7 </Button>
              <Button onClick={() => setFomula(fomula + '8')}> 8 </Button>
              <Button onClick={() => setFomula(fomula + '9')}> 9 </Button>
              <OpButton onClick={() => {
                if (/[^-^×^÷^+.]/.test(fomula[fomula.length - 1]))
                  setFomula(fomula + '×');
              }}> × </OpButton>
            </LineWrap>
            <LineWrap>
              <Button onClick={() => setFomula(fomula + '0')}> 0 </Button>
              <OpButton onClick={() => {
                if (/[0-9]/.test(fomula[fomula.length - 1]))
                  setFomula(fomula + '.');
              }}> . </OpButton>
              <OpButton onClick={() => {
                setAnswer(calculate(fomula));
              }}> = </OpButton>
              <OpButton onClick={() => {
                if (/[^-^×^÷^+.]/.test(fomula[fomula.length - 1]))
                  setFomula(fomula + '÷');
              }}> ÷ </OpButton>
            </LineWrap>
          </ButtonWrap>
        </CalculatorWrap>
      </Background>
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #aaaaaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CalculatorWrap = styled.div`
  width: 400px;
  height: 600px;
  background: #9765F4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
`

const ScreenWrap = styled.div`
  width: 360px;
  height: 160px;
  background-color: #D4BFF9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const Screen = styled.div`
  width: 340px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const FomulaWrap = styled.div`
  width: 300px;
  height: 80px;
  background-color: rgb(0, 160, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const Fomula = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 60px;
  color: white;
  padding: 0px 15px;
  display: flex;
  justify-content: left;
  align-items: center;
`

const AnswerWrap = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0px;
`

const Answer = styled.div`
  width: 150px;
  height: 30px;
  background-color: rgb(222, 222, 222);
  margin: 3px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: blue;
    color: white;
  }
`

const ButtonWrap = styled.div`
  width: 360px;
  height: 400px;
  background-color: #D4BFF9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`

const LineWrap = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.div`
  width: 50px;
  height: 50px;
  border: solid yellow 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(222, 222, 222);
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: blue;
    color: white;
  }
`

const OpButton = styled.div`
  width: 50px;
  height: 50px;
  border: solid yellow 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  background-color: rgb(222, 222, 222);
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: blue;
    color: white;
  }
`



export default Calculator;