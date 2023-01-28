import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./action";

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    // console.log(job);
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo List </h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter Todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}{" "}
            <span
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
