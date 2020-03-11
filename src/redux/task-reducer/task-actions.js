export const addTask = task => ({
  type: "ADD_TASK",
  payload: task
})

export const updateTasks = tasks => ({
  type: "UPDATE_TASKS",
  payload: tasks
})
