import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import auth from './auth';
import user from './user';

interface StateType {
  auth: any,
  user: any
}

interface ActionType {
  type: string,
  payload: any,
}

const rootReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        auth,
        user,
      });

      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;