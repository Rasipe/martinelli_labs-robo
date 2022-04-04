import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './RBField.css'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { EMember } from '../../store/types';
import { shallowEqual, useSelector } from 'react-redux';


function RBField(props: IRBFieldProps) {

  let [currentItem, setCurrentItem]: any = useState(props.defaultState);
  useEffect(() => {
  }, [currentItem]);

  useEffect(() => {
  }, [props.value]);

  function increment(increment: number) {
    const index = props.options.indexOf(currentItem) + increment;
    if (index < 0 || index >= props.options.length) {
      return;
    }
    setCurrentItem(props.options[index])
    props.onSave(props.options[index], props.member)
  }

  const disabled: boolean = useSelector(
    (state: any) => state[props.member][props.fieldKey + 'Disabled'],
    shallowEqual
  )

  return (
    <div className="rb-field">
      <label htmlFor="" className="rb-field__label">{props.label}</label>
      <input className={['rb-field__options', disabled ? 'rb-field__options--disabled' : ''].join(" ")} disabled value={currentItem} />
      <div className='rb-field__modifiers'>
        <button className='rb-field__modifier' onClick={() => increment(1)} disabled={disabled}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <button className='rb-field__modifier' onClick={() => increment(-1)} disabled={disabled}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
}

export default RBField;


export interface IRBFieldProps {
  label: string;
  options: string[];
  valueChange?: Function;
  defaultState: string;
  value?: string;
  onSave: (value: string, member: EMember) => void,
  fieldKey: string;
  member: EMember
}