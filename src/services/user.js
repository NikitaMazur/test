import { request } from '../common';

const USER_URL = '/user';

export function getUser(query) {
  return request({
    url: USER_URL,
    method: 'PATCH',
    query
  });
}
