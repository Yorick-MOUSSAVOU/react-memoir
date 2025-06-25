import React from "react";

function Form (props){
    function handleSubmit (e){
        e.preventDefault();
        props.onSubmit("Yorick est Un Dev Web compétent .")
    }
    return(
        <form onClick={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Qu'y a-t-il à faire&nbsp;?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Ajouter
        </button>
      </form>
    )
}

export default Form;