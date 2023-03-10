export const USER_LOGIN = 'USER_LOGIN';

export function userLogin(payload) {
  return {
    type: USER_LOGIN,
    payload,
  };
}
