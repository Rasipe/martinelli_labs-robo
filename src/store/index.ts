import * as actions from "./actions"
import { EMember, RBAction, RBDispatch } from "./types"

export function saveValue(value: string, actionType: string, member: EMember) {
  const action: RBAction = {
    type: actionType,
    member,
    state: value,
  }

  return (dispatch: RBDispatch) => dispatch(action)
}