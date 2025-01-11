import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    /*
    useState-
        let/const [variable, function] = useState(initial data)
    
        variable - name of the state variable
        function - function to update value of the variable
        initial data - starting value of variable, 
            0-9,
            "", or '' ->string
            [] -> array
             {} -> object
              true -> boolean

        useEffect - to show some side effects
            useEffect(function, [dependency])
                function ->  side effects to show
                dependency -> list of state variables, that will trigger the function
                    [] -> sideeffect is shown on page load only
                     [a,b,c]-> side effect is shown on page load, and when a or b or c changes
                     null -> side effect is shown on page load and whenever any state changes
        */
    useEffect(() => {
        alert("Count has been changed")
    }, [count])

    function increase_count() {
        setCount(++count)
        console.log(count)
    }

    const decrease = () => {
        setCount(--count)
    }
    return (
        <div style={{
            display: 'flex',
            height: "80vh",
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '32px'
        }}>
            Counter : {count}
            <button onClick={increase_count}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={() => {
                setCount(0)
            }}>Reset</button>
        </div>
    )
}

export default Counter