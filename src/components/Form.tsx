import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { Props, todo } from "../model/todos";

interface FormProps {
  todoList: todo[];
  setTodoList: Props["setTodoList"];
}

const Form = ({ todoList, setTodoList }: FormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log(todoList);

  // title 변경
  const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // body 변경
  const onBodyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  // set todolist
  const onAddClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!titleRef.current?.value) {
      alert("제목을 입력해 주세요.");
      return;
    }
    if (!bodyRef.current?.value) {
      alert("내용을 입력해 주세요.");
      return;
    }

    const newTodo = {
      id: uuid(),
      title,
      body,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
    setTitle("");
    setBody("");
  };

  return (
    <form>
      <div className="form-input">
        <label>제목</label>
        <input
          ref={titleRef}
          type="text"
          className="title-input"
          value={title}
          onChange={onTitleChangeHandler}
        />
        <label>내용</label>
        <input
          ref={bodyRef}
          type="text"
          className="body-input"
          value={body}
          onChange={onBodyChangeHandler}
        />
      </div>
      <button onClick={onAddClickHandler}>추가하기</button>
    </form>
  );
};

export default Form;
