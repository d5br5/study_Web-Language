import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState, useRef, useCallback } from "react";

const createBulkTodos = () => {
	const array = [];
	for (let i = 0; i < 2500; i++) {
		array.push({ id: i, text: `할일 ${i}`, checked: false });
	}
	return array;
};

function App() {
	const [todos, setTodos] = useState(createBulkTodos);
	const nextId = useRef(4);

	const onInsert = useCallback((text) => {
		const todo = { id: nextId.current, text, checked: false };
		setTodos((todos) => [...todos, todo]);
		nextId.current += 1;
	}, []);

	const onRemove = useCallback((id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}, []);

	const onToggle = useCallback((id) => {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo,
			),
		);
	}, []);
	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
}

export default App;
