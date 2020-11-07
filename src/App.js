import React, { useState, useEffect } from 'react'
import FAddForm from './FAddForm'
import FItem from './FItem'

const App = props => {
    const [ items, setItems ] = useState([])
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        console.log('start initial ...')
        let data = [{ id: 1, name: 'Item 1', price: 0.99, des: 'testing' }, { id: 2, name: 'Item 2', price: 0.89, des: 'testing' }]
        setItems(data)
        setTotal(data.length)
    }, [])

    const add = (name, price, des) => {
        console.log('added')
    }

    return (
        <div style={styles.container}>
            <h1>Hello React</h1>

            <ul style={styles.itemList}>
                {
                    items.map(d => {
                        return (
                            <FItem 
                                key = { d.id }
                                data = { d }
                            />
                        )
                    })
                }
            </ul>

            <FAddForm
                add = { add }
            />
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
    },
    itemList: {
        listStyle: 'none',
        padding: 0
    }
}