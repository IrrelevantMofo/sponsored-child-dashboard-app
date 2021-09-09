import { takeLatest } from "redux-saga/effects";

function createSagaAction(saga) {
  const type = `SAGA${saga.name}`;
  const actionCreator = payload => ({ type, payload });
  actionCreator.register = () => takeLatest(type, saga);
  actionCreator.saga = saga;
  actionCreator.type = type;
  return actionCreator;
}

export default createSagaAction;