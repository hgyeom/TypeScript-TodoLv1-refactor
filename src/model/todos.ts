import { Dispatch, SetStateAction } from "react";

export interface Props {
  todo: todo;
  setTodoList: Dispatch<SetStateAction<todo[]>>;
  isDone: boolean;
}

export interface todo {
  id: string;
  title: string;
  body: string;
  isDone: boolean;
}
