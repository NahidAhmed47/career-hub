import React from "react";
import HeaderTitle from "./HeaderTitle";

const Blog = () => {
  return (
    <div>
      <HeaderTitle>Blogs</HeaderTitle>
      <div className="max-w-[800px] mx-auto my-10 md:my-14">
        <h1 className="title text-center pb-6">FAQ</h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          Q01. When should you use context API?
          </div>
          <div className="collapse-content">
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level. So, we can access this provide context data from any components around context provider.</p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Q02. What is a custom hook?
          </div>
          <div className="collapse-content">
            <p>Custom hooks is a function in react. That allows to reuse stateful logic across multiple components. It can create by anyone with logic and use multiple time just by call.</p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Q03. What is useRef?
          </div>
          <div className="collapse-content">
            <p>useRef is a react hook that provides to create a reference to a element or a value that persists component renders. The useRef Hook returns an object with a single property called current, which can be used to store and access the current value of the reference.</p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Q04. What is useMemo?
          </div>
          <div className="collapse-content">
            <p>useMemo is a hook that work to memorize a function's output and avoid unnecessary re-renders.The useMemo Hook takes two arguments: a function that returns the value you want to memoize, and an array of dependencies that determine when the value should be recalculated.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
