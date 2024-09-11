import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fethchPosts } from "./postSlice";
function postView() {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fethchPosts());
  }, [dispatch]);
  return (
    <>
      <h1>Post View</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <section className="todo-card">
        {posts &&
          posts.map((post) => {
            const { id, title } = post;
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

export default postView;
