import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Buy milk and cookies',
    completed: true,
    id: 0,
  },
  {
    text: 'Eat cookies',
    completed: false,
    id: 1,
  },
  {
    text: 'Read README.md',
    completed: false,
    id: 2,
  },
];

export default function todos(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo));

    case COMPLETE_TODO:
      return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.id === null);

    default:
      return state;
  }
}
