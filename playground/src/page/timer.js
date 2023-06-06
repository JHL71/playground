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
    const [timer, setTimer] = useState({
        h: '00',
        m: '00',
        s: '00'
    })


    const back = () => {
        navigate('/');
    }

    const selectMod = (mod) => {
        switch (mod) {
            case 'Current Time':
                return (
                    <>
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
                    </>
                )
            case 'Timer':
                return (
                    <>
                        <Box1>
                            <TimerInput value={timer.h} onChange={(e) => setTimer({...timer, h: e.target.value})}></TimerInput>
                            <div>:</div>
                            <TimerInput value={timer.m} onChange={(e) => setTimer({...timer, m: e.target.value})}></TimerInput>
                            <div>:</div>
                            <TimerInput value={timer.s} onChange={(e) => setTimer({...timer, s: e.target.value})}></TimerInput>
                        </Box1>
                    </>
                )
            case 'Stop Watch':
                return (
                    <>
                    <div>stop watch</div>
                    </>
                )
        }
        return (
            <div>

            </div>
        )
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
        if (mod === 'Current Time') {
            setTimeout(() => {
                setSec(sec + 1);
            }, 1000)
        } else if (mod === 'Timer') {
            setTimeout(() => {
                
            })
        }
    })
    return (
        <>
            <Title>{mod}</Title>
            <div>
                {selectMod(mod)}
                <Box1>
                    <div onClick={() => setMod('Current Time')}>current time</div>
                    <div onClick={() => setMod('Timer')}>timer</div>
                    <div onClick={() => setMod('Stop Watch')}>stopwatch</div>
                </Box1>
            </div>
            <button onClick={back}>back</button>
        </>
    )
}

const Title = styled.div`
    width: 400px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
`

const Box1 = styled.div`
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: wheat;
    border: solid black 1px;
`

const TimerInput = styled.input`
    all: unset;
    width: 100px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: skyblue;
`

export default Timer;