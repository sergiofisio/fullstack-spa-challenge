import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { createTask, updateTask } from "../api/api";

const CreateEditPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task;

  const handleSubmit = async (data: { title: string; description: string }) => {
    if (task) {
      await updateTask(task.id, data);
    } else {
      await createTask(data);
    }
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {task ? "Editar Tarefa" : "Criar Tarefa"}
      </h1>
      <TaskForm initialData={task} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateEditPage;
