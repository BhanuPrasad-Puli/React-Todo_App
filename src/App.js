import React from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free";
import ListItems from "./ListItems";
import FlipMove from "react-flip-move";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newitems = [...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }

  deleteItem(key) {
    const filteredItem = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItem
    });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      this.setState({
        items: items
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h2 className="header">Todo App</h2>
        <header>
          <form className="todo-form">
            <input
              type="text"
              value={this.state.currentItem.text}
              placeholder="write here..."
              onChange={this.handleInput}
            ></input>
            <button type="submit" onClick={this.addItem} className="btn">
              Add
            </button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
