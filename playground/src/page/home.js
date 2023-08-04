import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
    const navigate = useNavigate();
    const move = (str) => {
        navigate(`${str}`)
    }

    return(
        <>
            <Wrap>
                <Title>home</Title>
                <ConBox>
                    <Card onClick={() => move('/timer')}>
                        Timer
                    </Card>
                    <Card onClick={() => move('/cal')}>
                        Calculator
                    </Card>
                    <Card onClick={() => move('/cp')}>
                        CPList
                    </Card>
                    <Card onClick={() => move('/canvas')}>
                        Canvas
                    </Card>
                    <Card onClick={() => move('/calendar')}>
                        Calendar
                    </Card>
                    <Card>
                        Next Item(working)
                    </Card>
                </ConBox>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
  background: skyblue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
`

const ConBox = styled.div`
    width: 800px;
    height: 400px;
    display: flex;
    background-color: #fefefe;
    border-radius: 20px;
    overflow: scroll;
`

const Card = styled.div`
    margin: auto 20px auto 20px;
    width: 200px;
    height: 300px;
    background-color: greenyellow;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex-shrink: 0;
    :hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
        transition: all 1s ease-out;
        background-color: yellowgreen;
    }
`
export default Home;