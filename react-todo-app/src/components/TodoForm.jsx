import React from 'react'

export default function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit} autoComplete="off" className="flex mb-5">
            <input
                name="todoInput"
                className=" mr-2 rounded-lg border-2 border-black p-3 font-semibold"
                placeholder="Add todo..." aria-label="Add todo input" />
            <button type="submit" className="px-4 py-2 font-semibold text-sm bg-white dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-slate-400 rounded-md shadow-sm">Add</button>
        </form>
    )
}
