import React, { useState, useEffect } from 'react'
import FAddForm from './FAddForm'
import FItem from './FItem'

const App = props => {
    const [ items, setItems ] = useState([])
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        console.log('start initial ...')
        let data = [
            { id: 1, name: 'Item 1', price: 0.99, des: 'there were four layout modes: Block, for sections in a webpage; Inline, for text; Table, for two-dimensional table data' }, 
            { id: 2, name: 'Item 2', price: 0.89, des: 'there were four layout modes: Block, for sections in a webpage; Inline, for text; Table, for two-dimensional table data' }
        ]
        setItems(data)
    }, [])

    useEffect(() => {
        setTotal(items.length)
    }, [items])

    const add = (name, price, des) => {
        let id = items.length + 1
        setItems([...items, { id, name, price, des }])
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Item List</h1>

            <FAddForm
                add = { add }
            />

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
        </div>  
    )
}

export default App

const styles = {
    container: {
        margin: 'auto',
        marginTop: 20,
        padding: 20,
        width: 800,
        borderWith: 5,
        borderStyle: 'solid',
        borderColor: '#ddd'
    },
    title: {
        textAlign: 'center',
        color: '#0693E3'
    },
    itemList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column-reverse'
    }
}
