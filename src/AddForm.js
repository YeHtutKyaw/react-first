import React from 'react'

class AddForm extends React.Component {
    state = {
        des: ''
    }

    nameRef = React.createRef()
    priceRef = React.createRef()

    componentDidUpdate(prevProp){
        console.log(`prevProp: ${prevProp.total}, currentProp: ${this.props.total}`)
        if(prevProp.total !== this.props.total)
            console.log('new item inserted!')
    }
    
    componentWillReceiveProps(nextProp){
        console.log(`nextProp : ${nextProp.total}`)
    }

    changeDesHandler = (e) => {
        this.setState({des: e.target.value})
    }

    add = () => {
        let name = this.nameRef.current.value
        let price = this.priceRef.current.value

        this.props.add(name, price, this.state.des)
    }  

    render(){
        return (
           <div>
                <input type="text" ref={this.nameRef}/><br/>
                <input type="text" ref={this.priceRef}/><br/>
                <textarea value={this.state.des} onChange={ this.changeDesHandler }></textarea>
                <button onClick={this.add}>Add</button>
           </div>
        )
    }
}

export default AddForm