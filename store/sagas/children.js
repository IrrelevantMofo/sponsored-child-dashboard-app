import { put, call } from 'redux-saga/effects';
import { siteActions } from '../reducers/children';
import { getChildrenData } from '../../api/fetchApi';
import createSagaAction from './createSagaAction';

export function* fetchChildSaga() {
    try {
      yield put(siteActions.fetchChildRequest());
      const result = yield call(getChildrenData);
      yield put(siteActions.fetchChildSuccess(result));
    } catch (err) {
      yield put(siteActions.fetchChildFailure(err));
    }
  }
  export const fetchChildAsync = createSagaAction(fetchChildSaga);

  
export function* cleanupSaga() {
    yield put(siteActions.clearChildData());
  }
  export const cleanup = createSagaAction(cleanupSaga);