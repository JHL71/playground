import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NtS = (num) => {
    if (num > 9) {
        return String(num);
    } else if (num >= 0) {
        return '0' + num;
    }
}

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
    let id = -1;

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
                            <div onClick={() => {
                                clearTimeout(id);
                                clearTimeout(id - 2);
                                setTimer({h: '00', m: '00', s: '00'})
                                setStart(false);
                            }}>reset</div>
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
        setTimeout(() => {
            setSec(sec + 1);
        }, 1000)
        if (start) {
            id = setTimeout(() => {
                let ts = Number(timer.s);
                let tm = Number(timer.m);
                let th = Number(timer.h);
                if (ts > 0) {
                    ts -= 1;
                } else {
                    if (tm > 0) {
                        tm -= 1;
                        ts = 59;
                    } else {
                        if (th > 0) {
                            th -= 1;
                            tm = 59;
                            ts = 59;
                        } else {
                            setStart(false);
                        }
                    }
                }
                ts = NtS(ts);
                tm = NtS(tm);
                th = NtS(th);
                setTimer({h: th, m: tm, s: ts})
                
            }, 1000)
        }
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