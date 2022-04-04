import React from 'react';
import RBFieldGroup from './shared/rb-field-group/RBFieldGroup'

import './App.css';
import { IRBFieldProps } from './shared/rb-field/RBField';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { saveValue } from './store';
import * as actionTypes from "./store/actions"
import { EMember, IArm, IHead, RBState } from './store/types';
import { EArmElbow, EArmPulse, EHeadInclination, EHeadRotation } from './enums';

function App() {


  const rotation: string = useSelector(
    (state: RBState) => state.head.rotation,
    shallowEqual
  )
  const inclination: string = useSelector(
    (state: RBState) => state.head.inclination,
    shallowEqual
  )
  const leftPulse: string = useSelector(
    (state: RBState) => state.leftArm.pulse,
    shallowEqual
  )
  const leftElbow: string = useSelector(
    (state: RBState) => state.leftArm.elbow,
    shallowEqual
  )
  const rightElbow: string = useSelector(
    (state: RBState) => state.rightArm.elbow,
    shallowEqual
  )
  const rightPulse: string = useSelector(
    (state: RBState) => state.rightArm.pulse,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const save = React.useCallback(
    (value: string, action, member) => dispatch(saveValue(value, action, member)),
    [dispatch]
  )


  const head: IRBFieldProps[] = [
    {
      label: "Rotação",
      options: [
        EHeadRotation.ROT90N,
        EHeadRotation.ROT45N,
        EHeadRotation.STOP,
        EHeadRotation.ROT45,
        EHeadRotation.ROT90
      ],
      defaultState: EHeadRotation.STOP,
      onSave: (value: string) => save(value, actionTypes.HEAD_ACTION_SAVE_ROTATION, EMember.HEAD),
      fieldKey: "rotation",
      member: EMember.HEAD
    },
    {
      label: "Inclinação",
      options: [
        EHeadInclination.DOWN,
        EHeadInclination.STOP,
        EHeadInclination.UP
      ],
      defaultState: EHeadInclination.STOP,
      onSave: (value: string) => save(value, actionTypes.HEAD_ACTION_SAVE_INCLINATION, EMember.HEAD),
      fieldKey: "inclination",
      member: EMember.HEAD
    },
  ];

  const leftArm: IRBFieldProps[] = [
    {
      label: "Cotovelo",
      options: [
        EArmElbow.STOP,
        EArmElbow.SLIGHTLY_CONTRACTED,
        EArmElbow.CONTRACTED,
        EArmElbow.STRONGLY_CONTRACTED
      ],
      defaultState: EArmElbow.STOP,
      onSave: (value: string, member:  EMember | undefined) => save(value, actionTypes.ARM_SAVE_ELBOW, member),
      fieldKey: "elbow",
      member: EMember.LEFT_ARM
    },
    {
      label: "Pulso",
      options: [
        EArmPulse.ROT90N,
        EArmPulse.ROT45N,
        EArmPulse.STOP,
        EArmPulse.ROT45,
        EArmPulse.ROT90,
        EArmPulse.ROT135,
        EArmPulse.ROT180
      ],
      defaultState: EArmPulse.STOP,
      onSave: (value: string, member:  EMember | undefined) => save(value, actionTypes.ARM_SAVE_PULSE, member),
      fieldKey: "pulse",
      member: EMember.LEFT_ARM
    }
  ];

  const rightArm = leftArm.map(item => {
    return {
      ...item,
      member: EMember.RIGHT_ARM
    }
  })


  function headValidation(fields: IRBFieldProps[]) {
  }

  function armValidation(fields: IRBFieldProps[]) {

  }

  return (
    <div className="App">
      <div className="container">
        <RBFieldGroup fields={head} title="Cabeça" validation={headValidation}></RBFieldGroup>
        <RBFieldGroup fields={leftArm} title="Braço Esquerdo" validation={armValidation}></RBFieldGroup>
        <RBFieldGroup fields={rightArm} title="Braço Direito" validation={armValidation}></RBFieldGroup>
      </div>
      <p>{rotation}</p>
      <p>{inclination}</p>
      <p>{leftElbow}</p>
      <p>{leftPulse}</p>
      <p>{rightElbow}</p>
      <p>{rightPulse}</p>
    </div>
  );
}

export default App;
