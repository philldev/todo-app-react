import React from 'react'
import { List, Text } from '@chakra-ui/core'
import Todo from './Todo'

export default function TodoList({todos, handleDelete, toggleCompleted}) {
  return (
    <List>
      {todos.length === 0 ? <Text>You have no todos.. add one above</Text>: null}
      {todos.map(t => <Todo key={t.id} todo={t} handleDelete={handleDelete} toggleCompleted={toggleCompleted} /> )}
    </List>
  )
}
