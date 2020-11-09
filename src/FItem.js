import React from 'react'

const FItem = ({ data }) => {

    return (
        <li style={styles.item}> 
            <b>{ `${data.name} - $${data.price}`}</b>{ `, ${data.des}` }
        </li>
    )
}

export default FItem

const styles = {
    item: {
        margin: 8,
        padding: 10,
        color: 'black',
        background: '#8ED1FC'
    }
}