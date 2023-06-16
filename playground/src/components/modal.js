import styled from "styled-components";

const Modal = ({ setCP }) => {

  return (
    <>
      <Back onClick={() => setCP('')}>
        <Contents onClick={(e) => e.stopPropagation()}>
          <Describe>
            how to close modal
          </Describe>
          <ButtonWrap>
            <Button>
              go back
            </Button>
            <Button onClick={() => setCP('')}>
              accept
            </Button>
          </ButtonWrap>
        </Contents>
      </Back>
    </>
  )
}

const Back = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(150, 150, 150, 0.5);
`

const Contents = styled.div`
  width: 300px;
  height: 400px;
  background-color: wheat;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Describe = styled.div`

`

const ButtonWrap = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.div`
  width: 80px;
  height: 40px;
  background-color: #bbbbbb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #111111;
    color: white;
  }
`

export default Modal;