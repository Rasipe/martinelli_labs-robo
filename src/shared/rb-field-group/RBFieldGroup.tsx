import React from 'react';
import './RBFieldGroup.css'
import RBField, { IRBFieldProps } from '../rb-field/RBField';
import { EMember, RBState } from '../../store/types';
import { shallowEqual, useSelector } from 'react-redux';


function App(props: IRBFieldGroupProps) {
    return (
        <div className="rb-field-group">
            <h3 className="rb-field-group__title">{props.title}</h3>
            {
                props.fields.map((item, index) => {
                    
                    return (
                        <RBField key={index} options={item.options} label={item.label} defaultState={item.defaultState} onSave={item.onSave} fieldKey={item.fieldKey} member={item.member}/>
                    )
                })
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