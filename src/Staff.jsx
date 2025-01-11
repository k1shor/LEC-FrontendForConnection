import React, { useContext } from 'react'
import Person from './Person'
import { MyContext } from './MyContext'
import { ThemeContext } from './App'

const Staff = () => {

    let msg = useContext(MyContext)
    let theme = useContext(ThemeContext)

    return (
        <div className={theme}>
            {msg}
            <Person name="RAM" address="Kathmandu" phone="9874125632" />

            <Person name="Shyam" address="Bhaktapur" phone="9874125630" />

            <Person name="Hari" address="Lalitpur" phone="9745896320" />
            <Person phone="9745896320" />
        </div>
    )
}

export default Staff