/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const Home = () => {
  const { sendRequest } = useHttp();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    sendRequest(
      {
        url: "http://localhost:3000/tasks",
        method: "GET",
      },
      (response) => {
        if (response.status === 200) {
          setTasks(response.tasks);
        }
      }
    );
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((element, index) => (
              <tr key={element._id}>
                <td>{index + 1}</td>
                <td>{element.description}</td>
                <td>{element.completed ? "Completed" : "Not Completed"}</td>
                <td>
                  <button>deleted</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
