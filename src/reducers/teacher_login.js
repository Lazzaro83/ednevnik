import {SEND_USERNAME} from '../actions/index';

export default function(state = null, action){
  switch(action.type){
    case SEND_USERNAME:
      return state = action.payload;
    default:
      return state;
  }
}
