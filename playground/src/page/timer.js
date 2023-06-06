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
    const [start, setStart] = useState(false);


    const back = () => {
        navigate('/');
    }

    const timerH = (value) => {
        let x = Number(value);
        if (isNaN(x)) {
            setTimer({...timer, h: '00'})
        } else {
            if (x >= 24) {
                setTimer({...timer, h: '23'});
            } else if (x >= 10) {
                setTimer({...timer, h: String(x)});
            } else {
                setTimer({...timer, h: '0'+x});
            }
        }
    }

    const timerM = (value) => {
        let x = Number(value);
        if (isNaN(x)) {
            setTimer({...timer, m: '00'})
        } else {
            if (x >= 60) {
                setTimer({...timer, m: '59'});
            } else if (x >= 10) {
                setTimer({...timer, m: String(x)});
            } else {
                setTimer({...timer, m: '0'+x});
            }
        }
    }

    const timerS = (value) => {
        let x = Number(value);
        if (isNaN(x)) {
            setTimer({...timer, s: '00'})
        } else {
            if (x >= 60) {
                setTimer({...timer, s: '59'});
            } else if (x >= 10) {
                setTimer({...timer, s: String(x)});
            } else {
                setTimer({...timer, s: '0'+x});
            }
        }
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
                            <TimerInput value={timer.h} onChange={(e) => timerH(e.target.value)}></TimerInput>
                            <div>:</div>
                            <TimerInput value={timer.m} onChange={(e) => timerM(e.target.value)}></TimerInput>
                            <div>:</div>
                            <TimerInput value={timer.s} onChange={(e) => timerS(e.target.value)}></TimerInput>
                        </Box1>
                        <Box1>
                            <div onClick={() => setStart(true)}>start</div>
                            <div onClick={() => setStart(false)}>stop</div>
                            <div>reset</div>
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
                nothing
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
        if (timer.s === '00' && start) {
            let m = Number(timer.m);
            if (m >= 10) {
                m--;
                m = String(m);
            } else {
                m--;
                m = '0' + m;
            }
            setTimer({...timer, m: m, s: '59'});
        }
        if (timer.m === '00' && start) {
            let h = Number(timer.h);
            if (h >= 10) {
                h--;
                h = String(h);
            } else {
                console.log(h);
                h--;
                h = '0' + h;
            }
            setTimer({...timer, h: h, m: '59'});
        }
        setTimeout(() => {
            setSec(sec + 1);
            console.log(timer);
            if (start) {
                let s = Number(timer.s);
                if (s >= 10) {
                    s--;
                    s = String(s);
                } else {
                    s--;
                    s = '0' + s;
                }
                setTimer({...timer, s: s})
            }
        }, 1000)
    })

    useEffect(() => {

    }, [])
    return (
        <>
            <Wrap>
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
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

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