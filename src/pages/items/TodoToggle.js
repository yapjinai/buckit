import React from 'react';

const TodoToggle = ({onList}) => {
  return (
    <div className='TodoToggle'>
      {onList ? onTodoList() : notOnTodoList()}
    </div>
  )
}

const onTodoList = () => {
  return (
    <>
      <button>
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
    <button>
      Add to to-do list
    </button>
  )
}

export default TodoToggle;
