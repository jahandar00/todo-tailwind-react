import React from "react";

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
                <form onSubmit={this.handleFormSubmit} autoComplete="off" className="flex mb-5">
                    <input 
                    name="todoInput" 
                    className=" mr-2 rounded-lg border-2 border-black p-3 font-semibold" 
                    placeholder="Add todo..." aria-label="Add todo input" />
                    <button type="submit" className="px-4 py-2 font-semibold text-sm bg-white dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-slate-400 rounded-md shadow-sm">Add</button>
                </form>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {
                        todos.map((todoText, index) => (
                            <li key={index} className="w-full px-4 py-3 flex justify-between border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <span>{todoText}</span>
                                <button onClick={() => this.removeTodo(index)} className="bg-red" >x</button>
                            </li>
                        ))
                    }

                </ul>
            </div>

        )

    }
}

export default App;
