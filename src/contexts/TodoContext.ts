import { createContext, useState, useContext } from "react";

interface ITodoContext {
    name: string
    author: string
    url: string
}

const TodoContext = createContext<ITodoContext | null>(null)



export const useTodoContext = () => {
    return useContext(TodoContext)
}