import * as types from '../constants/ActionTypes'


export const addTodo = (text: string): Action => ({ type: types.ADD_TODO, text })

export const deleteTodo = (id: string|number): Action => ({ type: types.DELETE_TODO, id })

export const editTodo = (id: string|number, text: string): Action => ({ type: types.EDIT_TODO, id, text })

export const completeTodo = (id: string|number): Action => ({ type: types.COMPLETE_TODO, id })

export const completeAllTodos = (): Action => ({ type: types.COMPLETE_ALL_TODOS })

export const clearCompleted = (): Action => ({ type: types.CLEAR_COMPLETED })

export const setVisibilityFilter = (filter: string): Action => ({ type: types.SET_VISIBILITY_FILTER, filter})
