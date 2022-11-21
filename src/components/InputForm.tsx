import React from 'react'

interface props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (event: React.FormEvent) => void
}





const InputForm: React.FC<props> = ({todo, setTodo, handleSubmit}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className='d-grid mb-3' >
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text' className='form-control py-2 mb-3' placeholder='Enter Todo' />
        <button type='submit' className='btn btn-success' >Add TODO</button>

      </form>
    </>
  )
}

export default InputForm