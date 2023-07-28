const Card = ({ todo, setTodoList, todoList }: any) => {
  const onRemoveClickHandler = (id: any) => {
    const filterdTodo = todoList.filter((todo: any) => todo.id !== id);
    setTodoList(filterdTodo);
  };

  const onDoneClickHandler = (id: any) => {
    const changeTodo = todoList.map((todo: any) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    });
    setTodoList([...changeTodo]);
  };

  return (
    <div className="card">
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div className="card-button">
        <button onClick={() => onRemoveClickHandler(todo.id)}>삭제</button>
        <button onClick={() => onDoneClickHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Card;
