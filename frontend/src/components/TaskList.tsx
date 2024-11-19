import { Task } from "../types";
import Button from "./button";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-400">Criado em: {task.origin_ip}</p>
          <div className="mt-4 space-x-2">
            <Button
              onClick={() => onEdit(task)}
              className="bg-blue-500  hover:text-blue-500 border-blue-500"
              text="Editar"
            />
            <Button
              onClick={() => onDelete(task.id)}
              className=" bg-red-500  hover:text-red-500 border-red-500"
              text="Excluir"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
//   return (
//     <div className="space-y-4">
//       {tasks.map((task) => (
//         <div key={task.id} className="p-4 bg-gray-100 rounded shadow-md">
//           <h2 className="text-xl font-bold">{task.title}</h2>
//           <p className="text-gray-600">{task.description}</p>
//           <p className="text-sm text-gray-400">
//             Created from: {task.origin_ip}
//           </p>
//           <div className="mt-4 space-x-2">
//             <button
//               onClick={() => onEdit(task)}
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(task.id)}
//               className="px-4 py-2 bg-red-500 text-white rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;
