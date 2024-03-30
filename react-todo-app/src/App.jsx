import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    }
    handleFormSubmit(event) {
        event.preventDefault();
        const {todoInput} = event.target.elements;
        const { todos } = this.state;
        if(!todoInput.value) {
            return;
        }
        this.setState({
            todos: [...todos, todoInput.value]
        })
        todoInput.value = ""
    }
    removeTodo(index) {
        this.setState((prevstate) =>{
            const oldTodos = prevstate.todos.slice();
            oldTodos.splice(index, 1);
            return {
                todos: oldTodos,
            }
        })
        }
    render() {
        const { todos } = this.state;

        return (
            <div className="w-1/2 mx-auto mt-5">
                <h1 className="text-lg font-bold text-center my-2">To-do App</h1>
                <TodoForm onSubmit = {this.handleFormSubmit}/>
                <TodoList todos= {todos} onDelete={this.removeTodo}/>
            </div>

        )

    }
}

export default App;
