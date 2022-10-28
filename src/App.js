import { useState } from 'react';
import TodoList from './components/Todos/TodoList';
import Buttons from './components/buttons/Buttons';
import TodoForm from './components/Todos/TodoForm';
import { useSearchParams } from 'react-router-dom';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setsearchValue] = useState(
    searchParams.get('q') ? searchParams.get('q') : ''
  );
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState([]);

  const countTodoCompleted = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;
  const allTodoCompleted = todos.length === countTodoCompleted;

  const inputChangeHandler = (text) => {
    text
      ? setSearchParams({ q: text.toLowerCase().split(' ').join('') })
      : setSearchParams({});
    setsearchValue(text);
    setTodos(
      text
        ? filteredTodos.filter((todo) => inputCheckerHandler(todo, text))
        : filteredTodos
    );
  };

  const inputCheckerHandler = (todo, text) => {
    if (
      todo.text
        .toLowerCase()
        .split(' ')
        .join('')
        .includes(text.toLowerCase().split(' ').join(''))
    ) {
      return true;
    }
  };

  function sortCoursesHandler(key) {
    filteredTodos.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }

  function setComplitedHandler(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    );
    setTodos(newTodos);
    setfilteredTodos(newTodos);
  }

  function addTodoHandler(text) {
    const textFormatting =
      text && (text[0].toUpperCase() + text.slice(1).toLowerCase()).trim();
    const newTodos = filteredTodos.filter(
      (todo) => todo.text !== textFormatting
    );
    const uniqueId =
      Math.floor(Math.random() * 1000) +
      text[0] +
      (Math.floor(Math.random() * 1000) + text[text.length - 1]);
    const newTodo = {
      text: textFormatting,
      isCompleted: false,
      id: uniqueId,
    };
    if (!searchValue) {
      textFormatting &&
        textFormatting !== Number(textFormatting) &&
        setTodos([...newTodos, newTodo]);
    }
    textFormatting &&
      textFormatting !== Number(textFormatting) &&
      setfilteredTodos([...newTodos, newTodo]);
  }

  function handleRemoveTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setfilteredTodos(newTodos);
  }

  function handleRemoveComplitedTodo() {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos(newTodos);
    setfilteredTodos(newTodos);
  }

  function allTodoCompleteHandler() {
    const newTodos = todos.map(
      (todo) => todo && { ...todo, isCompleted: true }
    );
    setTodos(newTodos);
    setfilteredTodos(newTodos);
  }

  function resetHandler() {
    setTodos([]);
    setfilteredTodos([])
  }

  function tableOfNumberTodo() {
    if (todos.length && searchValue) {
      return <h2>Finded todo: {todos.length}</h2>;
    }
    if (searchValue) {
      return <h2>Todos not founded</h2>;
    }
    if (filteredTodos.length) {
      return <h2>Total todo number: {todos.length}</h2>;
    }
    return;
  }

  return (
    <div className="App">
      <div>
        <h1>Todo App</h1>
        <TodoForm
          sortCourses={sortCoursesHandler}
          inputChange={inputChangeHandler}
          addTodo={addTodoHandler}
        />
        {!!countTodoCompleted && (
          <h3>
            You have completed {countTodoCompleted} todo
            {countTodoCompleted > 1 && 's'}
          </h3>
        )}
        {tableOfNumberTodo()}
      </div>
      <div className="list">
        {!!todos.length && (
          <Buttons
            allTodoComplete={!allTodoCompleted && allTodoCompleteHandler}
            removeComplitedTodo={
              countTodoCompleted && handleRemoveComplitedTodo
            }
            reset={resetHandler}
          />
        )}
        <TodoList
          filteredTodos={filteredTodos}
          setComplited={setComplitedHandler}
          removeTodo={handleRemoveTodo}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
