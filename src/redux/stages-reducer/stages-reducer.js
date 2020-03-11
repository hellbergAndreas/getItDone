const INITIAL_STATE = {
  stages: ["backLog", `I'm on it!`, "this shit is done!"]
}

const stagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_STAGE":
      return {
        ...state,
        stages: state.stages.push(action.payload)
      }
  }
  return {
    ...state
  }
}

export default stagesReducer
