import { useState } from "react";

let newTodoId = 4;

const Form = ({ todoList, setTodoList }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log(todoList);
  // title 변경
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  // body 변경
  const onBodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  // set todolist
  const onAddClickHandler = (e) => {
    e.preventDefault();
    if (document.querySelector(".title-input").getAttribute("value") === "") {
      alert("제목을 입력해 주세요.");
      document.querySelector(".title-input").focus();
      return;
    }
    if (document.querySelector(".body-input").getAttribute("value") === "") {
      alert("내용을 입력해 주세요.");
      document.querySelector(".body-input").focus();
      return;
    }

    const todo = {
      id: newTodoId,
      title,
      body,
      isDone: false,
    };

    newTodoId++;
    setTodoList([...todoList, todo]);
    setTitle("");
    setBody("");
  };

  return (
    <form>
      <div className="form-input">
        <label>제목</label>
        <input
          type="text"
          className="title-input"
          value={title}
          onChange={onTitleChangeHandler}
        />
        <label>내용</label>
        <input
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
