import { takeEvery } from "redux-saga/effects";

export function createSagaActionTakeEvery(saga) {
  const type = `SAGA${saga.name}`;
  const actionCreator = payload => ({ type, payload });
  actionCreator.register = () => takeEvery(type, saga);
  actionCreator.saga = saga;
  actionCreator.type = type;
  return actionCreator;
}

export default createSagaActionTakeEvery;