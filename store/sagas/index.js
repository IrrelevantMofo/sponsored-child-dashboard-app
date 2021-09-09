import { all } from 'redux-saga/effects';
import { fetchChildAsync } from './children';

export default function* root() {
    yield all([
        fetchChildAsync.register()
    ]);
  }
  