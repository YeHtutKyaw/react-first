import React from 'react'

const FItem = ({ data }) => {

    return (
        <li style={styles.item}> 
            { `${data.name} - $${data.price} , ${data.des}`}
        </li>
    )
}

export default FItem

const styles = {
    item: {
        width: 500,
        margin: 10,
        padding: 10,
        color: '#fff',
        borderStyle: 'solid',
        borderColor: '#000',
        background: 'grey'
    }
}