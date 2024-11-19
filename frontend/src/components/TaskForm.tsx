import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

interface TaskFormProps {
  initialData?: { title: string; description: string };
  onSubmit: (data: { title: string; description: string }) => void;
}

export default function TaskForm({ initialData, onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    if (title && description) {
      onSubmit({ title, description });
      setDisabled(true);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        label="Título"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={20}
        type="text"
      />
      <Input
        label="Descrição"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={100}
        type="textarea"
      />
      <Button
        onClick={handleSubmit}
        disabled={disabled}
        className={`bg-green-500 hover:text-green-500 border-green-500`}
        text="Salvar"
      />
    </div>
  );
}
