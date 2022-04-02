import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './RBField.css'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function RBField(props: IRBFieldProps) {

  let [currentItem, setCurrentItem]: any = useState(props.defaultState);
  useEffect(() => {
  }, [currentItem]);

  function increment(increment: number) {
    const index = props.options.indexOf(currentItem) + increment;
    if (index < 0 || index >= props.options.length) {
      return;
    }
    setCurrentItem(props.options[index])
  }
  return (
    <div className="rb-field">
      <label htmlFor="" className="rb-field__label">{props.label}</label>
      <input className={['rb-field__options', props.disabled? 'rb-field__options--disabled': ''].join(" ")} disabled value={currentItem} onInput={() => () => props.valueChange ? props.valueChange() : undefined} />
      <div className='rb-field__modifiers'>
        <button className='rb-field__modifier' onClick={() => increment(1)} disabled={props.disabled}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <button className='rb-field__modifier' onClick={() => increment(-1)} disabled={props.disabled}>
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
  disabled?: boolean;
}