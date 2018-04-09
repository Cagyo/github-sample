import { FOLLOWERS_URI } from './../constants/api';
import { BASE_URL, USERS_URI } from '../constants';
import { callApi } from './client';

export async function getUsers(options = {}) {
  const url = `${BASE_URL}${USERS_URI}`;

  return await callApi('GET', url, { query: options });
}

export async function getUserFollowers(userLogin, options = {}) {
  const url = `${BASE_URL}${USERS_URI}/${userLogin}/${FOLLOWERS_URI}`;

  return await callApi('GET', url, { query: options });
}
