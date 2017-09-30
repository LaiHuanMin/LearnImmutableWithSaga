import { delay } from "redux-saga";
import {
  select,
  takeEvery,
  put,
  takeLatest,
  fork,
  take,
  race
} from "redux-saga/effects";
import { fromJS } from "immutable";

function* toggleSnack() {
  while (true) {
    var { show, hide } = yield race({
      show: take("SAGA_SNACK_STATUS_SHOW"),
      hide: take("SAGA_SNACK_STATUS_CLOSE")
    });
    console.log("show ", "hide ");
    if (show !== undefined) {
      show.payload.value.open = true;
      yield put({
        type: "SNACK_STATUS_TOGGLE",
        payload: {
          value: fromJS({
            ...show.payload.value
          })
        }
      });
    } else {
      yield put({
        type: "SNACK_STATUS_TOGGLE",
        payload: {
          value: fromJS({
            open: false
          })
        }
      });
    }
  }
}

function* main(action) {
  yield* [yield toggleSnack()];
}

export default main;
