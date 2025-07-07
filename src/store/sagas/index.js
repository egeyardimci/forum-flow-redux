import { spawn} from "redux-saga/effects";
import postSaga from "./postSaga";
import userSaga from "./userSaga";

function* rootSaga() {
  yield spawn(postSaga);
  yield spawn(userSaga);
}

export default rootSaga;
    