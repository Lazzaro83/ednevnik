import { combineReducers } from 'redux';
import TeacherLogin from './teacher_login.js'


const rootReducer = combineReducers({
  teacherLogin: TeacherLogin
});

export default rootReducer;
