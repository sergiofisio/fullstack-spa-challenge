import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/api";
import { Task } from "../types";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleEdit = (task: Task) => {
    navigate(`/edit/${task.id}`, { state: { task } });
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
