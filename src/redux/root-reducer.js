import { combineReducers } from "redux"
import stagesReducer from "./stages-reducer/stages-reducer"
import taskReducer from "./task-reducer/task-reducer"

export default combineReducers({
  stages: stagesReducer,
  tasks: taskReducer
})
