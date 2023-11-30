import { combineReducers, configureStore} from '@reduxjs/toolkit';
import statusSearchBoxReducer from '../reducers/setStatusSearchBox';
import searchArticles from "../reducers/searchArticles";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  statusSearchBox: statusSearchBoxReducer,
  searchArticles: searchArticles,
})
const persistConfig = {
  key: 'root',
  storage,
  blacklist:['statusSearchBox']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store= configureStore({
    reducer: persistedReducer,
  });
export const persistor= persistStore(store);


