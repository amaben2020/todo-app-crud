import React, { useState, useEffect } from 'react';
import './index.css';
import Layout from './layout/Layout';
import CreateAndViewTask from './components/modules/CreateAndViewTask';
import EditTask from './components/modules/EditTask';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  const [mutationType, setMutationType] = useState<'add' | 'edit'>('edit');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos array changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // Handle new todo input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // Handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  // Handle deleting a todo
  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Handle toggling todo completion
  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Handle editing a todo
  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditingText('');
  };

  // Handles the view switch logic
  const handleMutationType = (type: 'add' | 'edit') => setMutationType(type);

  return (
    <Layout>
      <CreateAndViewTask
        toggleComplete={toggleComplete}
        saveEdit={saveEdit}
        startEditing={startEditing}
        deleteTodo={deleteTodo}
        setEditingText={setEditingText}
        editingText={editingText}
        todos={todos}
        editingId={editingId}
        handleMutationType={handleMutationType}
      />
      <EditTask
        newTodo={newTodo}
        handleInputChange={handleInputChange}
        addTodo={addTodo}
        startEditing={startEditing}
        deleteTodo={deleteTodo}
        editingId={Number(editingId)}
        setEditingText={setEditingText}
        editingText={editingText}
        saveEdit={saveEdit}
        mutationType={mutationType}
      />
    </Layout>
  );
};

export default App;
