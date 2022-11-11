import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTasks = [
    { id: 1, text: "Fazer alguma coisas 1" },
    { id: 2, text: "Fazer alguma coisas 2" },
    { id: 3, text: "Fazer alguma coisas 3" },
    { id: 4, text: "Fazer alguma coisas 4" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id: id });
  };

  return (
    <div>
      {/* 3 - useReducer Simples */}
      <h2>useReducer Simples</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar Numero</button>
      <hr />

      {/* 3 - useReducer Complexo */}
      <h2>useReducer Complexo</h2>
      <h3>Tarefas:</h3>

      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Criar Tarefa" />
      </form>

      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
