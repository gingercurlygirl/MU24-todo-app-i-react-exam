import {useEffect, useState, ReactElement} from "react";
import AddListItem from "./AddListItem.tsx";

function ListTodo(): ReactElement | undefined {
    type Todos = {
        id: number;
        text: string;
        completed: boolean;
    }
    const [todos, setTodos] = useState<Array<Todos>>([
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

    const [loadedLocalStorage, setLoadedLocalStorage] = useState(false); // a flag to indicate that localStorage has been loaded

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
    }, [todos]);


    const [text, setText] = useState('');

    function addTodo(text: string) {
        if (text === "") return;

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

    // If localStorage has been loaded, render the component
    if (loadedLocalStorage) {
        return (
            <div className="list-todo">
                {todos.map(todo => (
                    <AddListItem
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
                <button onClick={() => addTodo(text)}>Add</button>
            </div>
        );
    }
}


export default ListTodo
