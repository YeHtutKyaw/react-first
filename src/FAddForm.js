import React, { createRef, useState } from 'react'

const FAddForm = props => {
    
    const [des, setDes] = useState('')

    let nameRef = createRef()
    let priceRef = createRef()

    const changeDesHandler = e => setDes(e.target.value)

    const add = () => {
        let name = nameRef.current.value
        let price = priceRef.current.value

        props.add(name, price, des)
    }

    const clear = () => {
        nameRef.current.value = priceRef.current.value = ''
        setDes('')
    }

    return (
        <div style={styles.container}>
            <input type="text" ref={nameRef} placeholder='Enter Name' style={styles.textBox}/>
            <input type="text" ref={priceRef} placeholder='Enter Price' style={styles.textBox}/>
            <textarea value={des} onChange={ changeDesHandler } placeholder='Enter Description' style={styles.textBox}></textarea>
            <div style={styles.subContainer}>
                <button onClick={ add } style={styles.btnAdd}>Add</button>
                <button onClick={ clear } style={styles.btnClear}>Clear</button>
            </div>
        </div>
    )
}

export default FAddForm

const styles = {
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        background: '#ddd'
    },
    textBox: {
        padding: 8,
        marginTop: 10
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 20
    },
    btnAdd: { 
        padding: 10,
        width: '30%',
        background: '#0693E3'
    },
    btnClear: { 
        padding: 10,
        width: '30%',
        background: '#FF8A65',
        marginLeft: 10
    }
}
