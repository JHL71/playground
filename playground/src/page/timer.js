import { useNavigate } from "react-router-dom";

function Timer() {
    const navigate = useNavigate();
    const back = () => {
        navigate('/');
    }

    return (
        <>
            <title>Timer</title>
            <button onClick={back}>back</button>
        </>
    )
}

export default Timer;