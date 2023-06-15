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
                <div>
                    &nbsp;
                </div>
                <ConBox>
                    <div onClick={() => move('/timer')}>
                        Timer
                    </div>
                    <div onClick={() => move('/cal')}>
                        Calculator
                    </div>
                    <div onClick={() => move('/cp')}>
                        CPList
                    </div>
                    <div>
                        Next Item(working)
                    </div>
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
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export default Home;