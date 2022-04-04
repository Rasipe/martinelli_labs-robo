export interface IHead {
    inclination: string
    rotation: string
    rotationDisabled: boolean
    inclinationDisabled: boolean
}

export interface IArm {
    pulse: string
    elbow: string
    pulseDisabled: boolean
    elbowDisabled: boolean
}

export type RBState = {
    head: IHead,
    leftArm: IArm,
    rightArm: IArm
}

export type RBAction = {
    type: string
    member: EMember
    state: string
}

export type RBDispatch = (args: RBAction) => RBAction

export enum EMember {
    LEFT_ARM = "leftArm",
    RIGHT_ARM = "rightArm",
    HEAD = "head"
}