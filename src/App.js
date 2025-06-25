import React from "react";
import Todo from "./components/Todo.js";
import Form from "./components/Form.js";
import FilterButton from "./components/FliterButton.js";




function App(props) {

  function onSubmit (name){
    console.log(name)
  }

  const TaskList = props.tasks.map((task) => 
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>
  );

  const PrendreList = props.prends.map((prend) => 
    <FilterButton name={prend.name} id={prend.id} pressed={prend.pressed} key={prend.id}/>
  )

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onSubmit={onSubmit}/>
      <div className="filters btn-group stack-exception">
        {PrendreList}
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        // aria-labelledby="list-heading"                                                                                                                                                                                                                                                                                                                                                                              
      >
        {TaskList}
      </ul>
    </div>
  );
}

export default App;