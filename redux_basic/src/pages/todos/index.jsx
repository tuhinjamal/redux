import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../../services/actions/todosAction";
function todos() {
  // const { todos, isLoading, error } = useSelector((state) => state.todos);
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <>
      <h1>Welcome to TODO APP</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <section className="todo-card">
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <div key={id}>
                <p className="test">
                  {id} . {title}
                </p>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default todos;

// step 1: install package
// step 2: constants define
// step 3: async action creator
// step 4: reducer
// step 5: create store
// step 6: provide store
// step 7: use store
// step 8: add style
