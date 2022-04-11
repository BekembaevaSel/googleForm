import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todoList: [],
}
const TodoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		saveTodo: (state, action) => {
			state.todoList.push(action.payload)
		},
		deleteTodo: (state, action) => {
			state.todoList = state.todoList.filter(
				(el) => el.key !== action.payload,
			)
		},
	},
})

export const { saveTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;