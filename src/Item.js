import React from 'react'

class Item extends React.Component {

    render(){
        return <li style={styles.item}>{ `${this.props.name} - $${this.props.price} , ${this.props.des}` }</li>
    }
}

export default Item

const styles = {
    item: {
        width: 300,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: '#d2d2d2'
    }
}