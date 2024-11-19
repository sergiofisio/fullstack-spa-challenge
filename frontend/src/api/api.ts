import axios from "axios";
import { Task } from "../types";

const API_URL = "http://127.0.0.1:8000";

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: Omit<Task, "id" | "origin_ip">) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (
  id: number,
  task: Omit<Task, "id" | "origin_ip">
) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
};
