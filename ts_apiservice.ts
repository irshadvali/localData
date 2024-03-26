import http from "../http-common";
import { AxiosResponse } from "axios";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  published?: boolean;
}

const getAll = (): Promise<AxiosResponse<Tutorial[]>> => {
  return http.get("/tutorials");
};

const get = (id: number): Promise<AxiosResponse<Tutorial>> => {
  return http.get(`/tutorials/${id}`);
};

const create = (data: Tutorial): Promise<AxiosResponse<Tutorial>> => {
  return http.post("/tutorials", data);
};

const update = (id: number, data: Tutorial): Promise<AxiosResponse<Tutorial>> => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = (id: number): Promise<AxiosResponse<void>> => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = (): Promise<AxiosResponse<void>> => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title: string): Promise<AxiosResponse<Tutorial[]>> => {
  return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
