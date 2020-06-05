import React from "react";

import Task from "./Task";

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  //https://www.learnstorybook.com/intro-to-storybook/react/en/composite-component/
  if (loading) {
    return <div className="list-items">loading</div>;
  }

  // if (tasks.length === 0) {
  //   return <div class=""
  // }
}
