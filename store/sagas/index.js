import { all } from 'redux-saga/effects';
import { fetchChildAsync, cleanup } from './children';

export default function* root() {
    yield all([
        fetchChildAsync.register(),
        cleanup.register()
    ]);
  }
  