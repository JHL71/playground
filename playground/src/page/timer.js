import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Timer() {
    const navigate = useNavigate();
    const date = new Date();
    const [hour, setHour] = useState(date.getHours());
    const [min, setMin] = useState(date.getMinutes());
    const [sec, setSec] = useState(date.getSeconds());
    const [mod, setMod] = useState('Current Time');


    const back = () => {
        navigate('/');
    }

    useEffect(() => {
        if (sec === 60) {
            setSec(0);
            setMin(min + 1);
        }
        if (min === 60) {
            setMin(0);
            setHour(hour + 1);
        }
        if (hour === 24) {
            setHour(0);
        }
        setTimeout(() => {
            setSec(sec + 1);
        }, 1000)
    })
    return (
        <>
            <h1>{mod}</h1>
            <div>
                <Box1>
                    <div>H</div>
                    <div>M</div>
                    <div>S</div>
                </Box1>
                <Box1>
                    <div>
                        {hour}
                    </div>
                    <div>
                        {min}
                    </div>
                    <div>
                        {sec}
                    </div>
                </Box1>
                <Box1>
                    <div>current time</div>
                    <div>timer</div>
                    <div>stopwatch</div>
                </Box1>
            </div>
            <button onClick={back}>back</button>
        </>
    )
}

const Box1 = styled.div`
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: wheat;
    border: solid black 1px;
`

export default Timer;