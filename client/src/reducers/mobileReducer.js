import { MOBILE } from "../actions/types";

export default function (state = false, action) {
  switch (action.type) {
    case MOBILE:
      return action.payload;
    default:
      return state;
  }
}
