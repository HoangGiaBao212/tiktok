import { useState } from "react";

function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });

  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = job != "" ? [...prev, job] : [...prev];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="todoList" style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
