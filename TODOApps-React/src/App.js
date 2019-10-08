import React, {Component} from 'react';
import './App.css';
import ToDos from './Todo'

class App extends Component {
  state = {
    todos: [],
    task:""
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      if(this.state.task === ""){
        alert("Please enter a task");return;
      }
      let newElement = { id: this.state.todos.length + 1, content: this.state.task,isDisabled:true};
      this.setState(prevState => ({
        todos: [...prevState.todos, newElement],
        task:""
      }))
    }
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  }

  editTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      if(todo.id === id) {
        todo.isDisabled =  !todo.isDisabled;
        return todo;
      } else {
        return todo
      }
    })
    this.setState({
      todos
    });
  }

  render() {  
    return (
      <div className="todo-app container">
        
      <h1 className="center blue-text">Todo's</h1>
      <div className="input-field col s6">
          <input id="first_name" placeholder="Enter the task" type="text" className="validate" value={this.state.task} onChange={ this.handleChange.bind(this.state.task) } onKeyPress={this.handleKeyPress}/>
          
        </div>
      <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
    </div>
    )
  };
}

export default App;
