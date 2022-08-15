import React, { useEffect, useRef, useState } from 'react';
import Testing from './components/testing';

const App = () => {
  const [getLimit, setLimit] = useState(1)
  const [getMyName, setMyName] = useState("Dode")
  const inputNameRef = useRef(getMyName)

  useEffect(() => {
    setMyName(inputNameRef.current.value)
  }, [getLimit])

  return (
    <>
      <center>
        {getMyName}
        {getLimit}
        <br />
        <input ref={inputNameRef} defaultValue={inputNameRef.current}/>
        <button onClick={() => setLimit((prev) => prev + 1)}>Naikan limit</button>
        <button onClick={() => setLimit((prev) => (prev === 0 ? 0 : prev - 1))}>Turunkan limit</button>
      </center>
      <Testing title="Hello bang" description="Apa?"/>
    </>
  )
}

export default App;
