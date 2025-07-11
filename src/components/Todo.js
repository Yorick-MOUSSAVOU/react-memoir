import React from "react";

function Todo (props){
    return (
        <li className="todo stack-small">
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}/>
            <label className="todo-label" htmlFor={props.id}>
              {props.name}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer 
            </button>
            <button
              type="button"
              className="btn btn__danger"
              onClick={() => props.deleteTask(props.id)}>
              Supprimer <span className="visually-hidden">{props.name}</span>
            </button>

          </div>
        </li>
    );
}

export default Todo;