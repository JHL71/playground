import { useState } from "react";
import styled from "styled-components";
import { Modal, Toggle, Notice } from "../components";

const CPList = () => {
  const [CP, setCP] = useState('');

  const display = (str) => {
    switch (str) {
      case 'Modal':
        return (
          <Modal setCP={setCP}/>
        )
      case 'Toggle':
        return (
          <Toggle />
        )
      case 'Notice':
        return (
          <Notice/>
        )
      default:
        break;
    }
  }

  return (
    <>
      <Back>
        <Sidebar>
          <List>
            <Button onClick={() => setCP('Modal')}>Modal</Button>
            <Button onClick={() => setCP('Toggle')}>Toggle</Button>
            <Button onClick={() => setCP('Notice')}>Notice</Button>
          </List>
        </Sidebar>
        <Main>
          {display(CP)}
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
  display: flex;
  justify-content: center;
  align-items: left;
`

const Main = styled.div`
  width: 80%;
  height: 100%;
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
  background: rgb(222, 222, 222);
  :hover {
    cursor: pointer;
    background-color: black;
    color: #eeeeee;
  }
`

export default CPList;