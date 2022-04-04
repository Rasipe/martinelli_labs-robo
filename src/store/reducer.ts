/*
import * as actionTypes from "./actions"
import { EMember, IArm, RBAction, RBState } from "./types"

const initialState: RBState = {
    head: [],
    leftArm: [],
    rightArm: []
}

const reducer = (
    state: RBState = initialState,
    action: RBAction
  ): RBState => {
    switch (action.type) {
      case actionTypes.ADD_ARTICLE:
        const newArticle: IArticle = {
          id: Math.random(), // not really unique
          title: action.article.title,
          body: action.article.body,
        }
        return {
          ...state,
          articles: state.articles.concat(newArticle),
        }
      case actionTypes.REMOVE_ARTICLE:
        const updatedArticles: IArticle[] = state.articles.filter(
          article => article.id !== action.article.id
        )
        return {
          ...state,
          articles: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer
*/

import { EArmElbow, EArmPulse, EHeadInclination, EHeadRotation } from "../enums"
import * as actionTypes from "./actions"
import { IArm, RBAction, RBState } from "./types"

const initialState: RBState = {
    head: {
        inclination: EHeadInclination.STOP,
        rotation: EHeadRotation.STOP,
        rotationDisabled: false,
        inclinationDisabled: false,
    },
    leftArm: {
        elbow: EArmElbow.STOP,
        pulse: EArmPulse.STOP,
        elbowDisabled: false,
        pulseDisabled: true
    },
    rightArm: {
        elbow: EArmElbow.STOP,
        pulse: EArmPulse.STOP,
        elbowDisabled: false,
        pulseDisabled: true
    }
}

const reducer = (
    state: RBState = initialState,
    action: RBAction
): RBState => {
    const arm = <IArm>state[action.member]
    switch (action.type) {
        case actionTypes.HEAD_ACTION_SAVE_INCLINATION:
            state.head.inclination = action.state
            state.head.rotationDisabled = action.state == EHeadInclination.DOWN
            return { ...state }
        case actionTypes.HEAD_ACTION_SAVE_ROTATION:
            state.head.rotation = action.state
            return { ...state }
        case actionTypes.ARM_SAVE_ELBOW:
            arm.elbow = action.state
            arm.pulseDisabled = action.state != EArmElbow.STRONGLY_CONTRACTED
            return { ...state }
        case actionTypes.ARM_SAVE_PULSE:
            arm.pulse = action.state
            return { ...state }
    }
    return state
}

export default reducer