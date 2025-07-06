import React, {useState} from "react";
import {nanoid} from "nanoid"
import Todo from "./components/Todo.js";
import Form from "./components/Form.js";
import FilterButton from "./components/FliterButton.js";




function App(props) {

  const [tasks, setTasks] = useState(props.tasks)


  //Ajout de taches
  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`, name, completed:false};
    setTasks([...tasks, newTask]);
    // console.log(name);
  }

  function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // si cette tâche possède le même identifiant que la tâche éditée
    if (id === task.id) {
      // on utilise la décomposition objet afin
      // de construire un nouvel objet dont la
      // propriété `completed` est l'inverse
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}

function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}



  const TaskList = tasks.map((task) => 
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask}/>
  );

  //Compter les taches
  const taskWord = TaskList.length !== 1 ? "taches restantes": "tache restante";
  const headingText = `${TaskList.length} ${taskWord}`;

  const PrendreList = props.prends.map((prend) => 
    <FilterButton name={prend.name} id={prend.id} pressed={prend.pressed} key={prend.id}/>
  )

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onSubmit={addTask}/>
      <div className="filters btn-group stack-exception">
        {PrendreList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        // aria-labelledby="list-heading"                                                                                                                                                                                                                                                                                                                                                                              
      >
        {TaskList}
      </ul>

      <button type="submit" onClick={() => alert("J'ai réussi !")}>
        Clickb sur ce bouton et tu auras réussie !
      </button>

      <form type="submit" >
        <label htmlFor="calend">Entrez votre date de naissance</label>
        <input type="date" id="calend" />
      </form>
      <form type="submit" >
        <label htmlFor="calend">Entrez votre date de naissance</label>
        <input type="checkbox" id="calend" />
      </form>
      <form type="submit" >
        <label htmlFor="calend">Entrez votre choi</label>
        <input type="select" id="calend" />
          
      </form>
    </div>
  );
}

export default App;