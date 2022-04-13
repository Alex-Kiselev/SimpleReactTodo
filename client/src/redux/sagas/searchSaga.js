import { call, put, delay, takeLatest } from 'redux-saga/effects';



const searchFetch = async (title) => {
  const response = await fetch(`/filter/${title}`);
  return response.json(); 
};


function* searchWorker(action) { 
  try {
    yield delay(2000);
    const posts = yield call(searchFetch, action.payload); 
    yield put({ type: 'ALL POSTS', payload: posts }); 
  } catch (e) {
    console.log(e);
  }
}


function* searchWatcher() {
  yield takeLatest('SEARCH_POST', searchWorker); 
 
}

export default searchWatcher;
