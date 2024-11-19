import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEditPage from "./pages/CreateEditPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-7xl font-bold">
            Lista de Tarefas
          </Link>
          <Link
            to="/create"
            className="text-2xl border-2 border-white border-solid rounded-3xl py-2 px-4 hover:bg-white hover:text-gray-800"
          >
            Criar Tarefa
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateEditPage />} />
        <Route path="/edit/:id" element={<CreateEditPage />} />
      </Routes>
    </Router>
  );
};

export default App;
