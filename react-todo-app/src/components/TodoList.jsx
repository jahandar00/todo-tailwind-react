import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
    return (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                todos.map((todoText, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        text={todoText}
                        onDelete={onDelete} />
                ))
            }

        </ul>
    )
}