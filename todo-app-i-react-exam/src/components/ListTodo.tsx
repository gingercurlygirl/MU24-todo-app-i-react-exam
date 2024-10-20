import {useEffect, useState} from "react";
import AddNewTodo from "./AddNewTodo.tsx";

function ListTodo() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'send the package',
            completed: false,
        },
        {
            id: 2,
            text: 'doctor monday 14:45',
            completed: false,
        },
        {
            id: 3,
            text: 'buy tickets for movie',
            completed: false,
        },
        {
            id: 4,
            text: 'dinner with friend friday night',
            completed: false,
        }
    ]);
    const [loadedLocalStorage, setLoadedLocalStorage] = useState(false);

    useEffect(() => {
        const storedTodosJson = localStorage.getItem('todos');
        setLoadedLocalStorage(true);
        if (storedTodosJson) {
            setTodos(JSON.parse(storedTodosJson));
        }
    }, []);

    useEffect(() => {
        if (loadedLocalStorage) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [loadedLocalStorage, todos]);


    const [text, setText] = useState('');

    function addTodo(text: string) {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setText('');
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleCompleted(id: number) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            } else {
                return todo;
            }
        }));
    }

    if (loadedLocalStorage) {
        return (
            <div className="list-todo">
                {todos.map(todo => (
                    <AddNewTodo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => addTodo(text)}>Add Todo</button>
            </div>
        );
    }
}


export default ListTodo
