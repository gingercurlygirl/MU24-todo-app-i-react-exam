import {ChangeEvent, ReactElement} from "react";

type HandleNewTodoFunction = (id: number) => void;
function AddListItem({ id, text, completed, deleteTodo, toggleCompleted }: {id:number, text:string, completed:boolean, deleteTodo: HandleNewTodoFunction, toggleCompleted:HandleNewTodoFunction}) : ReactElement {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        toggleCompleted(id);
        event.target.toggleAttribute('checked'); // needed for rendering
    }

    return (
        <div className="Add-new-element">
            <input
                type="checkbox"
                checked={completed}
                onChange={handleChange}
            />
            <p>{text}</p>
            <button onClick={() => deleteTodo(id)}>
                X
            </button>
        </div>
    );
}
export default AddListItem;
