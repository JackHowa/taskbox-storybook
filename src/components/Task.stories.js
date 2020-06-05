import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export default {
  component: Task,
  // title -- how to refer to the component in the sidebar of the Storybook app,
  title: "Task",
  // exports that end in data are not stories
  excludeStories: /.*Data$/,
};

// excluded even though exported
// callback that appears in the actions panel if clicked
// Actions help you verify interactions when building UI
// components in isolation. Oftentimes you won't have access to the functions and state you have in context of the app. Use action() to stub them in.
export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

// excluded even though exported
export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// child stories
// permutation of a component v
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);
