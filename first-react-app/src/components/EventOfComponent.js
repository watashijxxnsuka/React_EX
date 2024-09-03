import React, { useState } from 'react'

export const EventOfComponent = () => {
    const [msg, setMsg] = useState('');

    const changeMsg = (e) => {
        console.log(e.target.value);
        setMsg(e.target.value);
    }

    const resetMsg = () => {
        setMsg('');
    }

    return (
        <>
        <input type='text' name='msg' value={msg} onChange={(e) => { setMsg(e.target.value); console.log(e.target.value);}}></input>
        <input type='text' name='msg' value={msg} onChange={changeMsg}></input>
        <button onClick={resetMsg}>초기화</button>
        </>
    )
}

export default EventOfComponent;

