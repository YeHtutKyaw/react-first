import React from 'react'
import Item from './Item'
import AddForm from './AddForm'
import './style.css'
class App extends React.Component {

  state = {
    items : [],
    total : 0,
    id: 0
  }

  // at initial state
  componentWillMount(){
    let data = [{ id: 1, name: 'Item 1', price: 0.99, des: 'testing' }, { id: 2, name: 'Item 2', price: 0.89, des: 'testing' }]
    this.setState({ items: data })
  }

  // at state data changes
  componentDidUpdate(){
    console.table(this.state.items)
  }

  add = (name, price, des) => {
    let id = this.state.items.length + 1

    this.setState({items: [
      ...this.state.items, { id, name, price, des }
    ],
    total : id
    })

  }

  render(){
    return (
      // <div className='container'>
      <div style={styles.container}>
        <h1 style={{ color: 'skyblue', backgroundColor: 'snow'}}>Hello React</h1>
        <ul style={styles.itemList}>
          {
            this.state.items.map(d => {
              return (
                <Item
                  key = {d.id}
                  name = { d.name }
                  price = { d.price }
                  des = { d.des }
                />
              )
            })
          }
        </ul>

        <AddForm 
          total = { this.state.total }
          add = { this.add }
        />
      </div>
    )
  }
}

export default App

const styles = {
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#ddd'
  },
  itemList: {
    listStyle: 'none',
    padding: 0
  }
}