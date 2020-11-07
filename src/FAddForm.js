import React, { createRef } from 'react'

const FAddForm = ({ add }) => {

    let nameRef = createRef()
    let priceRef = createRef()

    return (
        <div>
            <input type="text" ref={nameRef}/><br/>
            <input type="text" ref={priceRef}/><br/>
            <button>Add</button>
        </div>
    )
}

export default FAddForm
