import React from 'react';

const TodoToggle = ({item, onList, toggleTodo}) => {
  const onTodoList = () => {
    return (
      <>
        <button
          onClick={() => toggleTodo(item)}
        >
          Remove from to-do list
        </button>
        <button>
          Completed!
        </button>
      </>
    )
  }

  const notOnTodoList = () => {
    return (
      <button
        onClick={() => toggleTodo(item)}
      >
        Add to to-do list
      </button>
    )
  }


  return (
    <div className='TodoToggle'>
      {onList ? onTodoList() : notOnTodoList()}
    </div>
  )
}
export default TodoToggle;
