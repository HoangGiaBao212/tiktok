import "./App.css";
import { useStore, actions } from "./store";
// const listStudents = [
//   {
//     name: "Bảo",
//     age: 19,
//     town: "Biên Hoà",
//   },
//   {
//     name: "Tuấn",
//     age: 19,
//     town: "Bình Phước",
//   },
//   {
//     name: "Chỉnh",
//     age: 19,
//     town: " Quảng Ngãi",
//   },
// ];

// const [counter, setCounter] = useState(1);
// const handleCount = () => {
//   setCounter(counter + 1);
// };
// const [students, setStudents] = useState("Chưa có dữ liệu");
// const handleStudents = () => {
//   const index = Math.floor(Math.random() * listStudents.length);
//   setStudents(listStudents[index]);
// };
// return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handleCount}>Increase</button>
//       <h2>{JSON.stringify(students)}</h2>
//       <button onClick={handleStudents}>Change</button>
//     </div>
//   );
// ******************************************************************************************************************
// Todo List
// const [job, setJob] = useState("");
// const [jobs, setJobs] = useState(() => {
//   const storageJobs = JSON.parse(localStorage.getItem("jobs"));
//   return storageJobs ?? [];
// });
// const handleAdd = () => {
//   setJobs((prev) => {
//     const newJobs = job != "" ? [...prev, job] : [...prev];
//     localStorage.setItem("jobs", JSON.stringify(newJobs));
//     return newJobs;
//   });
//   setJob("");
// };
// return (
//   <div className="todoList" style={{ padding: 50 }}>
//     <input value={job} onChange={(e) => setJob(e.target.value)} />
//     <button onClick={handleAdd}>Add</button>
//     <ul>
//       {jobs.map((job, index) => (
//         <li key={index}>{job}</li>
//       ))}
//     </ul>
//   </div>
// );
//****************************************************************
// toggle
// const [toggleJob, setToggleJob] = useState(false);
// return (
//   <div>
//     <button
//       onClick={() => {
//         setToggleJob(!toggleJob);
//       }}
//     >
//       Toggle
//     </button>
//     {toggleJob && <Content />}
//   </div>
// );
// *******************************************
// todo list with useReducer

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  // console.log("todo input", todoInput);

  const handleAdd = () => {
    dispatch(actions.addTodoInput(todoInput));
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        value={todoInput}
        placeholder="Enter ..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
