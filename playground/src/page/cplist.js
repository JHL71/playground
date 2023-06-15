import styled from "styled-components";

const CPList = () => {

  return (
    <>
      <Back>
        <Sidebar>
          <List>
            <Button>Modal</Button>
            <Button>Toggle</Button>
            <Button>Notice</Button>
          </List>
        </Sidebar>
        <Main>

        </Main>
      </Back>
    </>
  )
}

const Back = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  border: solid red 3px;
  display: flex;
  justify-content: center;
  align-items: left;
`

const Main = styled.div`
  width: 80%;
  height: 100%;
  border: solid blue 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.div`
  width: 80%;
  height: 600px;
  background-color: rgb(242, 242, 160);
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding: 10px;
`

const Button = styled.div`
  width: 100px;
  height: 60px;
  border-radius: 50px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(222, 222, 222);
  :hover {
    cursor: pointer;
    background-color: black;
    color: #eeeeee;
  }
`

export default CPList;