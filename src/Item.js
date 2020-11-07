import React from 'react'
import { FaApple } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
class Item extends React.Component {
    render(){
        return <li style={styles.item}> <FaApple /> { `${this.props.name} - $${this.props.price} , ${this.props.des}` }</li>
    }
}
export default Item

const styles = {
    item: {
        width: 300,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: '#d2d2d2'
    }
}