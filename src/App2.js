import React, { useState, useEffect } from 'react'

const App = props => {
    const [ name, setName ] = useState('John')
    const [ age, setAge ] = useState(20)
    const [ address, setAddress ] = useState()

    useEffect(() => {
        console.log(`update address:${address}`)
        setAddress('Myeik')
    }, [])

    useEffect(() => {
        console.log(`name:${name}`)
    }, [name])

    return (
        <div style={styles.container}>
            <h1>User Profile</h1>
            <div>
                Name : { name } <br/>
                Age : { age } <br/>
                Address : { address }
            </div>
        </div>  
    )
}

export default App

const styles = {
    container: {
        margin: 20,
        padding: 20,
        borderWith: 5,
        borderStyle: 'solid',
        borderColor: '#ddd'
    }
}