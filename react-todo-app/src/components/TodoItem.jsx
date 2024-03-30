import React from 'react'

export default function TodoItem({text, index, onDelete}) {
    return (
        <li key={index} className="w-full px-4 py-3 flex justify-between border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <span>{text}</span>
            <button onClick={() => onDelete(index)} className="bg-red" >x</button>
        </li>
    )
}
