const INITIAL_STATE = {
  tasks: []
}

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_TASKS":
      return {
        ...state,
        tasks: [...action.payload]
      }
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
  }
  return {
    ...state
  }
}

export default taskReducer
