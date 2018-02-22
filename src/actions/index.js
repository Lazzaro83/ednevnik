export const SEND_USERNAME = 'SEND_USERNAME';

export function sendUserName(term){
  return{
    type: SEND_USERNAME,
    payload: term
  }
}
