import { ACCESS_TOKEN, IS_AUTHED, GET_USER } from "../ActionTypes";

export function Authenticate(status) {
  return { type: IS_AUTHED, status }
}

export function SetToken(status) {
  return { type: ACCESS_TOKEN, status}
}

export function SetUser(status) {
  return { type: GET_USER, status}
}