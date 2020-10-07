import { IS_AUTHED } from "../ActionTypes";

export function Authenticate(status) {
  return { type: IS_AUTHED, status }
}