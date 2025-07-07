import { spawn} from "redux-saga/effects";
import postSaga from "./postSaga";
import userSaga from "./userSaga";
import dashBoardSaga from "./dashBoardSaga";

function* rootSaga() {
  yield spawn(postSaga);
  yield spawn(userSaga);
  yield spawn(dashBoardSaga)
}

export default rootSaga;
    