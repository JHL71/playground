import { useState } from "react";
import styled from "styled-components";

function Calculator () {
  const [fomula, setFomula] = useState('')

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
              <Answer></Answer>
            </AnswerWrap>
          </Screen>
        </ScreenWrap>
        <ButtonWrap>
          <LineWrap>
            <Button>{'('}</Button>
            <Button>{')'}</Button>
            <Button> del </Button>
            <Button> C </Button>
          </LineWrap>
          <LineWrap>
            <Button onClick={() => setFomula(fomula + '1')}> 1 </Button>
            <Button onClick={() => setFomula(fomula + '2')}> 2 </Button>
            <Button onClick={() => setFomula(fomula + '3')}> 3 </Button>
            <Button onClick={() => setFomula(fomula + '+')}> + </Button>
          </LineWrap>
          <LineWrap>
            <Button onClick={() => setFomula(fomula + '4')}> 4 </Button>
            <Button onClick={() => setFomula(fomula + '5')}> 5 </Button>
            <Button onClick={() => setFomula(fomula + '6')}> 6 </Button>
            <Button onClick={() => setFomula(fomula + '-')}> - </Button>
          </LineWrap>
          <LineWrap>
            <Button onClick={() => setFomula(fomula + '7')}> 7 </Button>
            <Button onClick={() => setFomula(fomula + '8')}> 8 </Button>
            <Button onClick={() => setFomula(fomula + '9')}> 9 </Button>
            <Button onClick={() => setFomula(fomula + '*')}>&times;</Button>
          </LineWrap>
          <LineWrap>
            <Button> 0 </Button>
            <Button> . </Button>
            <Button> = </Button>
            <Button onClick={() => setFomula(fomula + '/')}>&divide; </Button>
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
`

const ScreenWrap = styled.div`
  width: 360px;
  height: 160px;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Screen = styled.div`
  width: 340px;
  height: 140px;
  background: #D4BFF9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const FomulaWrap = styled.div`
  width: 300px;
  height: 80px;
  border: solid white 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Fomula = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 60px;
  background-color: green;
  color: white;
  padding: 0px 15px;
  display: flex;
  justify-content: left;
  align-items: center;
`

const AnswerWrap = styled.div`
  width: 300px;
  height: 40px;
  border: solid black 1px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0px;
`

const Answer = styled.div`
  width: 150px;
  height: 30px;
  border: solid green 1px;
  margin: 3px;
`

const ButtonWrap = styled.div`
  width: 360px;
  height: 400px;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const LineWrap = styled.div`
  width: 300px;
  height: 60px;
  border: solid red 1px;
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
`



export default Calculator;