import React from 'react'
import { List } from '@chakra-ui/core'
import Todo from './Todo'

export default function TodoList({todos, handleDelete, toggleCompleted}) {
  return (
    <List>
      {todos.map(t => <Todo key={t.todoId} todo={t} handleDelete={handleDelete} toggleCompleted={toggleCompleted} /> )}
    </List>
  )
}
