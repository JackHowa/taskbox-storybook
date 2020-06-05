import React from "react";

import Task from "./Task";

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  // if (tasks.length === 0) {
  //   return <div class=""
  // }
}
