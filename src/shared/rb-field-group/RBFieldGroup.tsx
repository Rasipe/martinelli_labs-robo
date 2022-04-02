import React from 'react';
import './RBFieldGroup.css'
import RBField, { IRBFieldProps } from '../rb-field/RBField';

function App(props: IRBFieldGroupProps) {
  return (
      <div className="rb-field-group">
          <h3 className="rb-field-group__title">{props.title}</h3>
          {
              props.fields.map((item, index) => (
                  <RBField key={index} options={item.options} label={item.label} defaultState={item.defaultState} disabled={item.disabled}/>
              ))
          }
      </div>
  );
}

export default App;


interface IRBFieldGroupProps {
    title: string;
    fields: IRBFieldProps[];
    validation: Function;
}