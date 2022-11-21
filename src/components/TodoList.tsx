import React from 'react'
import { Todo } from '../models/todoModel'


interface props {
    items: Todo[]


}

const TodoList: React.FC<props> = ({items}) => {
  return (
    <div className='mt-3' >
        <div><small className='text-muted mb-2' >Todo Items</small></div>
        
        {

            items.map(Todo => (<div key={Todo.id} className='mb-3'>{Todo.text} ({Todo.isCompleted ? "completed": "not completed"})</div>))

        }
    
    
    </div>
  )
}

export default TodoList